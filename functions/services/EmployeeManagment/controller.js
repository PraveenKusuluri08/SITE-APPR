const { closedEnd } = require("../../endpoint");
const EmployeeModel = require("./model");
const EmployeeManagementUTILS = require("./utils");

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

router.put("/modules/update", closedEnd, (req, res) => {
  const empMgmtObj = new EmployeeModel(req.user);
  const uid = req.body.uid;
  const modules = req.body.modules;
  if (!EmployeeManagementUTILS._check_module_exists_or_not(modules))
    return res
      .status(300)
      .json({ message: `Invalid modules are not considered` });
  console.log(`${req.user.uid} REQUESTED TO UPDATE ${uid} MODULES`);
  empMgmtObj
    ._update_employee_modules(uid, modules)
    .then(() => {
      console.log(`${uid} MODULES UPDATED`);
      return res.json({ message: `Updated modules for ${uid} successfully` });
    })
    .catch((err) => {
      console.error(err);
      return res
        .status(500)
        .json({ message: `Failed to update modules for ${uid}` });
    });
});

module.exports = router;
