const { admin, db } = require("../utils/admin");
const mailToRecipent = require("../helpers/mail");
const JWT = require("../helpers/jwt");
const AuthenticationUTILS = require("./utils");

class Authentication {
  constructor(user) {
    this.actionPerformer = user;
  }

  async _invite_employee(inputs) {
    console.log("_invite_employee");
    const employeeEmail = inputs.employeeEmail.toLowerCase();
    const {
      empName,
      designation,
      department,
      dataOfJoining,
      areaOfSpecialization,
      dob,
    } = inputs.employeeInfo;
    const basicInfo = {
      email: employeeEmail,
      generalInfo: {
        empName,
        designation,
        dob,
        department,
        dataOfJoining,
        areaOfSpecialization,
      },
    };
    const tokenRef = db.collection("INVITATIONS").doc(employeeEmail);

    let isTokenInv = await (await tokenRef.get()).exists;

    let userRef = db.collection("EMPLOYEES").doc(employeeEmail);
    const batch = db.batch();
    let newToken;
    return AuthenticationUTILS._check_employee_registered_or_not(employeeEmail)
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          // User doesn't exist yet, create it...

          return db.collection("EMPLOYEES").doc(employeeEmail).get();
        }
         throw err;
      })
      .then((doc) => {
        console.log(doc)
        console.log(`INVITING ${employeeEmail}...`);
        let data;
        newToken = JWT.generateToken(employeeEmail);
        const newInvitation = {
          token: newToken,
          //   invitedBy: this.actionPerformer.uid,
          invitedAt: new Date().toISOString(),
        };
        if (doc.isExists && isTokenInv) {
          console.log("Previous Invitations exists");
          data = doc.data();
          // the below condition will occur when a deleted inactive employee,
          // if re invited then the inactive count should be increase
          if (!data)
            batch.update(tokenRef, {
              invitations: admin.firestore.FieldValue.arrayUnion(newInvitation),
              latestToken: newToken,
            });
          batch.update(userRef, {
            generalInfo: basicInfo.generalInfo,
            isExist: true,
          });
        } else {
          console.log("No Previous Invitations exists");
          data = {
            invitations: [],
            latestToken: "",
            invitee: "",
            registeredInfo: {
              isRegistered: false,
              registeredAt: "",
            },
          };
          data.invitations = [newInvitation];
          data.invitee = employeeEmail;
          data.latestToken = newToken;
          batch.set(tokenRef, data);
          batch.set(userRef, {
            ...basicInfo,
            isExist: true,
            status: "inactive",
          });
        }
        return batch.commit();
      })

      .then(() => {
        const formURL = `http://localhost:3000/invitations/${newToken}`;
        const invitor = "praveenkusuluri08@gmail.com";
        const subject = `INVITATION TO REGISTER SASI APPRAISEL`;
        const body = `<div>
                        ${invitor} is inviting you to register in <b>${"sasi"}</b>. Click on the below link to register:
                        <a href='${formURL}'>
                        <button name="button" style="background:#3630a3;color:white; cursor:pointer">Click here to register</button>
                        </a>
                        
                    </div>`;
        mailToRecipent(employeeEmail, subject, body);
        return employeeEmail;
      })
      .catch((err) => {
        throw err;
      });
  }
  /**
   * @inputs { token:string,employeeData:{
   *  empName:string,
   *  areaOfSpecialization:string,
   *  department:string,
   *  dob:string,
   *  dateOfJoining:string,
   *
   * }}
   */
  async _create_employee(inputs) {
    return new Promise((resolve, reject) => {
      const token = inputs.token;
      const employeeInfo = inputs.employeeData;
      let userRef,
        tokenRef,
        emailId,
        userInfo,
        moduleRef
      const metaRef = db.collection("META_INFO").doc("employees");
      const batch = db.batch();

      return AuthenticationUTILS._check_token_expiry(token)
        .then((email) => {
          emailId = email;
          return AuthenticationUTILS._check_employee_registered_or_not(emailId);
        })
        .catch((err) => {
          if (err.code === "auth/user-not-found") {
            // User doesn't exist yet, create it...
            return (tokenRef = db.collection("INVITATIONS").doc(emailId));
          }
          throw err;
        })
        .then(() => {
          return admin.auth().createUser({
            email: emailId,
            password: inputs.password,
          });
        })
        .then((user) => {
          userInfo = user;
          return admin.auth().setCustomUserClaims(user.uid, {
            role: "user",
          });
        })
        .then(() => {
          let inputsToSave = {};
          userRef = db.collection("EMPLOYEES").doc(userInfo.uid);
          let empEmailRef = db.collection("EMPLOYEES").doc(emailId);
          const registeredAt = new Date().toISOString();
          // setting employee collection
          Object.entries(employeeInfo).forEach(([key, value]) => {
            console.log("key",key,"value",value)
            if (key !== "password") inputsToSave[key] = value;
          });
          batch.set(userRef, {
            ...inputsToSave,
            uid: userInfo.uid,
            email: emailId,
            status: "active",
            role: "user",
            isDisabled: false,
            isExist: true,
            registeredAt: registeredAt,
          });

          batch.delete(empEmailRef);
          // setting up basic modules
          const modules = {
            accessibles: [
              "formA",
              "formb",
              "appiraisels-user",
              "employee-self-services",
            ],
          };
          moduleRef = db
            .collection("EMPLOYEES")
            .doc(userInfo.uid)
            .collection("MODULE_LEVEL_ACCESS")
            .doc("modules");
          batch.set(moduleRef, modules);

          // changing status to registered
          batch.update(tokenRef, {
            registeredInfo: {
              isRegistered: true,
              registeredAt: registeredAt,
            },
          })
          const metaDoc = {
            uid: userInfo.uid,
           ...inputsToSave
          };
          let {uid}= userInfo;
          batch.set(
            metaRef,
            {
              uid: metaDoc,
            },
            { merge: true }
          );
          return batch.commit();
        })
        .catch((err) => {
          throw err;
        });
    });
  }

  async _validate_invitation_token(token) {
    return AuthenticationUTILS._check_token_expiry(token)
      .then((info) => {
        console.log(info);
        return info;
      })
      .catch((err) => {
        throw err;
      });
  }
  //TODO:Forgot password
  
}

module.exports = Authentication;
