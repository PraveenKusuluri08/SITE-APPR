const {db} = require("../utils/admin")
class EmployeeModel {
  constructor(user) {
    this.actionPerformer = user;
  }

  async _get_employee_modules() {
    return db
      .collection("EMPLOYEES")
      .doc(this.actionPerformer.uid)
      .collection("MODULE_LEVEL_ACCESS")
      .doc("modules")
      .get()
      .then((snap) => {
        return snap.data().accessibles;
      })
      .catch((err) => {
        return err;
      });
  }
  async _get_all_modules() {
    return db
      .collectionGroup("MODULE_LEVEL_ACCESS")
      .get()
      .then((snap) => {
        return snap.docs.map((doc) => doc.data());
      })
      .catch((err) => {
        throw err;
      });
  }

  async _update_employee_modules(uid, modules) {
    return db
      .collection("EMPLOYEES")
      .doc(uid)
      .collection("MODULE_LEVEL_ACCESS")
      .doc("modules")
      .set(
        {
          accessibles: modules,
        },
        { merge: true }
      )
      .catch((err) => {
        return err;
      });
  }
}


module.exports=EmployeeModel