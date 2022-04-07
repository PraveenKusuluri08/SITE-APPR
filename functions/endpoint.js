const { admin, db } = require("./services/utils/admin")

const closedEnd = (req, res, next) => {
    let idToken, uid;
    if (req.headers.authorization) {
        // Bearer:some_uid token
        idToken = req.headers.authorization.split("Bearer ")[1] // token
    } else {
        console.log("No Token Found")
        return res.status(401).json({ message: `Unauthorized` })
    }

    return admin.auth().verifyIdToken(idToken)
        .then(decodedToken => {
            return db.collection(`EMPLOYEES`).doc(decodedToken.uid).get()
        }).then(doc => {
            const userData = doc.data()
            req.user = {
                uid: userData.uid,
            }
            console.log(`${req.user.uid}--> ${req.originalUrl}`)
            return next()
        }).catch(err => {
            console.error(err)
            return res.status(500).json({ message: `Error occured please make a refresh` })
        })
}

module.exports ={closedEnd}