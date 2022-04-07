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
        console.log(`INVITING ${employeeEmail}...`);
        let data;
        newToken = JWT.generateToken(employeeEmail);
        const newInvitation = {
          token: newToken,
          //   invitedBy: this.actionPerformer.uid,
          invitedAt: new Date().toISOString(),
        };
        if (doc.exists && isTokenInv) {
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
    const { token, employeeData } = inputs;

    let userInfo = {};
    let emailId, uid, employeeRef, tokenRef;
    return AuthenticationUTILS._check_token_expiry(token)
      .then((email) => {
        emailId = email;
        return AuthenticationUTILS._check_employee_registered_or_not(emailId);
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          // User doesn't exist yet, create it...
          console.log("first")
         return tokenRef = db.collection("INVITATIONS").doc(emailId);
        }
         throw err;
      })
      .then(() => {
        return admin.auth().createUser({
          email: emailId,
          password: employeeData.password,
          displayName: employeeData.empName,
        });
      })
      .then((user) => {
        (userInfo = user), (uid = user.uid);
        admin
          .auth()
          .setCustomUserClaims(user.uid, { email: emailId, role: "Employee" });
      })
      .then(() => {
        let inputsToSave = {};
        const batch = db.batch();
        employeeRef = db.collection("EMPLOYEES").doc(uid);
        let empEmailRef = db.collection("EMPLOYEES").doc(emailId);
        Object.entries(employeeData).forEach(([key, value]) => {
          if (key !== "password") inputsToSave[key] = value;
        });
        const registredAt = new Date().toISOString();
        batch.set(employeeRef, {
          ...inputsToSave,
          uid: uid,
          employeeId: uid,
          status: "active",
          role: "employee",
          isExists: true,
          registredAt: registredAt,
        });
        batch.delete(empEmailRef);

        batch.update(tokenRef, {
          registeredInfo: {
            isRegistered: true,
            registeredAt: registredAt,
          },
        });
        return batch.commit()
      })
      .catch((err) => {
        throw err;
      });
  }
}

module.exports = Authentication;
