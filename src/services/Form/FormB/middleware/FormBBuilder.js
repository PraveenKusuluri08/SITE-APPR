import {
    setStateAction,
    // loadFormBTemplateReq,
    // loadFormBTemplateSuccess,
    // loadFormBTemplateFailure,
    // updateFormBTemplateReq,
    // updateFormBTemplateSuccess,
    // updateFormBTemplateFailure,
  } from '../actions/actionCreators'
  // import {
  //   onInvitationTemplateReq,
  //   onInvitationSuccess,
  //   onInvitationFailure,
  // } from "../actions/actionCreators";
  import make_API_call from "../../../../providers/REST_API";
  import { errorMsg, successMsg } from "../../../../shared/SnackBars/index";
  
  export const _set_state = (obj) => (dispatch) => {
    dispatch(setStateAction(obj));
  };
  
  // export const loadFormBTemplate =() =>(dispatch, getState, { getFirebase }) => {
  //     dispatch(loadFormBTemplateReq());
  //     return getFirebase()
  //       .firestore()
  //       .collection(`FORM_BUILDER`)
  //       .doc("iZeS89R7HUaCw65B1Zvfqgcu5vC2-FORM")
  //       .get()
  //       .then((doc) => {
  //         console.log("================================", doc.data());
  //         return dispatch(loadFormBTemplateSuccess(doc.data()));
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         return dispatch(
  //           loadFormBTemplateFailure("Failed to load profile template")
  //         );
  //       });
  //   };
  
  // export const updateFormBTemplate = (data) => (dispatch) => {
  //   console.log("hhhhhhhhhhhhhhhhhhhhhhhhh", data);
  //   dispatch(updateFormBTemplateReq());
  //   return make_API_call("post", "/formbuilder/formA/create-template", data)
  //     .then((res) => {
  //       successMsg(res.message);
  //       console.log(res.message);
  //       return dispatch(updateFormBTemplateSuccess());
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       const msg = "Failed to update profile template";
  //       errorMsg(msg);
  //       return dispatch(updateFormBTemplateFailure(msg));
  //     });
  // };
  
  // export const onFormABuilderUpdated = (data) => (dispatch) => {
  //   dispatch(onInvitationTemplateReq());
  //   return make_API_call("post", "/formbuilder/invitationFromBuilder", data)
  //     .then((data) => {
  //       console.log("skdjskds", data.message);
  //       dispatch(onInvitationSuccess(data));
  //       successMsg(data.message);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return dispatch(onInvitationFailure(err));
  //     });
  // };
  