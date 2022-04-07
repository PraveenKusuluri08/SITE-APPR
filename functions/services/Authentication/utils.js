const { admin, db } = require("../utils/admin")
const JWT = require("../helpers/jwt")

class AuthenticationUTILS {
    static async _check_employee_registered_or_not(employeeEmail) {
        console.log(`CHECKING ${employeeEmail} registered or not`)
        return new Promise((resolve, reject) => {
            return admin.auth().getUserByEmail(employeeEmail)
                .then(() => {
                    console.log(`${employeeEmail} already registered`)
                    throw new Error("already-registered")
                }).catch(err => {
                    return reject(err)
                })
        })
    }

    static async _check_token_expiry(token) {
        return new Promise((resolve, reject) => {
            return db.collection("INVITATIONS").where("latestToken", "==", token).get()
                .then(snap => {
                    if (snap.size < 1)
                        throw new Error("token-not-found")
                    const data = snap.docs[0].data()
                    const tokenInfo = JWT.verifyToken(token)
                    const verify = tokenInfo.status
                    console.log("verify",verify)
                    if (!verify) {
                        console.log(`EXPIRED AT: ${new Date(tokenInfo.error.expiredAt)}`)
                        throw new Error('token-expired')
                    }
                    if (tokenInfo.info.email !== data.invitee)
                        throw new Error('invalid-access')
                    return resolve(tokenInfo.info.email.toLowerCase())
                }).catch(err => {
                    return reject(err)
                })
        })
    }

}

module.exports = AuthenticationUTILS