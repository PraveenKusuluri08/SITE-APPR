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
module.exports = router;
