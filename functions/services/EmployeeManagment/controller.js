const { closedEnd } = require("../../endpoint");
const EmployeeModel = require("./model");

const router = require("express").Router();

router.get("/modules", closedEnd, (req, res) => {
  const empMgmtObj = new EmployeeModel(req.user);
  console.log(`${req.user.uid} REQUESTED MODULES`);
  empMgmtObj
    ._get_employee_modules()
    .then((modules) => {
      return res.json(modules);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: `Failed to get modules` });
    });
});

router.get("/allmodules", closedEnd, (req, res) => {
  const empMgmtObj = new EmployeeModel(req.user);
  empMgmtObj
    ._get_all_modules()
    .then((modules) => {
      return res.send(modules);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: `Failed to get modules` });
    });
});



module.exports=router