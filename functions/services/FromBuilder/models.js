const { db } = require("../utils/admin");

class FormBuilder {
  constructor(user) {
    console.log(user)
    this.actionPerformer = user;
  }
  async _createTemplates(inputs) {
    const dbRef = db.collection("FORM_BUILDER").doc(this.actionPerformer.uid+"-FORM");
    return dbRef.set(
      {
        ...inputs,
        creatdAt: new Date().toISOString(),
        id: "Employee-profile-template",
        isExists:true
      },
      { merge: true }
    );
  }

}

module.exports = FormBuilder;
