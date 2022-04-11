const { db } = require("../utils/admin");

class FormBuilder {
  constructor(user) {
    console.log(user);
    this.actionPerformer = user;
  }
  async _createTemplates(inputs) {
    const dbRef = db
      .collection("FORM_BUILDER")
      .doc(this.actionPerformer.uid + "-FORM");
    return dbRef.set(
      {
        ...inputs,
        creatdAt: new Date().toISOString(),
        id: "Employee-profile-template",
        isExists: true,
      },
      { merge: true }
    ).then(()=>{
      
    })
  }
  async _createFormTemplates(inputs) {
    const { documentName, collectionName } = inputs;

    const dbRef = db.collection(collectionName).doc(documentName);
    let documentData = {};
    Object.entries(inputs).forEach(([key, value]) => {
      if (key === documentName || key === collectionName)
        documentData[key] = value;
    });
    return dbRef.set({
      ...documentData,
      isExists: true,
      cretedAt: new Date().toISOString(),
    },{merge: true});
  }

}

module.exports = FormBuilder;
