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
    );
    // .then(()=>{
    //   return db.collection("INVITATION_FORM_BUILDER").doc()
    // })
  }
  async _createFormTemplates(inputs) {
    const { documentName, collectionName } = inputs;

    const dbRef = db.collection(collectionName).doc(documentName);
    let documentData = {};
    Object.entries(inputs).forEach(([key, value]) => {
      if (key === documentName || key === collectionName)
        documentData[key] = value;
    });
    return dbRef.set(
      {
        ...documentData,
        isExists: true,
        cretedAt: new Date().toISOString(),
      },
      { merge: true }
    );
  }

  /***
   * @param inputs
   * docName:string, ->via sectionName
   * fields:string,->Via form builder frontend
   * docData:string
   */
  async _onFormBuilderUpdated(inputs) {
    const { docName, fields } = inputs;
    return db
      .collection("INVITATION_FORM_BUILDER")
      .doc(docName)
      .set(
        {
          fields,
          heading: inputs.sectionName,
          id: inputs.access_key,
          section: inputs.section,
          index: inputs.sortPriority,
        },
        { merge: true }
      )
      .catch((err) => {
        throw err;
      });
  }
}

module.exports = FormBuilder;
