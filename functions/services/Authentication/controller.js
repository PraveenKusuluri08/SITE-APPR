const { closedEnd } = require("../../endpoint");
const Authentication = require("./model");

const router = require("express").Router();

router.post("/inviteemployee", (req, res) => {
  const inputs = req.body;
  const obj = new Authentication(null);

  obj
    ._invite_employee(inputs)
    .then((info) => {
      console.log(info);
      return res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ error: err });
    });
});

router.post("/createemployee", (req, res) => {
  const inputs = req.body;
  const obj = new Authentication(null);
  obj
    ._create_employee(inputs)
    .then((info) => {
      console.log(info);
      return res.status(200).json({ message: "Employee created successfully" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ error: err });
    });
});

router.post("/validateInvitationToken", (req, res) => {
  const authObj = new Authentication(req, res)
  console.log(req.body.token)
  return authObj._validate_invitation_token(req.body.token)
      .then(info => {
          return res.json(info)
      })
      .catch(err => {
          console.error(err)
          if (err.toString().match("token-not-found"))
              return res.status(400).json({ message: "Invalid token", code: "auth/invalid-token" })
          else if (err.toString().match("token-expired"))
              return res.status(500).json({ message: "Token expired", code: "auth/token-expired" })
          return res.status(500).json({ message: "Failed to validate token", code: "auth/token-validation-failed" })
      })
})
module.exports = router;
