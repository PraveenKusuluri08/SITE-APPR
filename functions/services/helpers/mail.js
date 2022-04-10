const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});
const ses =new AWS.SES({apiVersion:"2010-12-01"})

function mailToRecipent(user, subject, body) {
  const params = {
    Destination: {
      ToAddresses: [user],
    },
    ConfigurationSetName: "ECOM-DATA-MAILS",
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: body,
        },
        Text: {
          Charset: "UTF-8",
          Data: "Invite employee",
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
    Source: "praveenkusuluri08@gmail.com",
  };
  const sendEmail = ses.sendEmail(params).promise()
  sendEmail.then((data)=>{
    return data
  }).catch(err=>{
      throw err
  })
}
module.exports=mailToRecipent
