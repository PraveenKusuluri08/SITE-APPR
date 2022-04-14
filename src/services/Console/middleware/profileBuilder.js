import {
  setStateAction,
  loadProfileTemplateReq,
  loadProfileTemplateSuccess,
  loadProfileTemplateFailure,
  updateProfileTemplateReq,
  updateProfileTemplateSuccess,
  updateProfileTemplateFailure
} from "../actions/ProfileBuilderActions/actionCreators"
import make_API_call from "../../../providers/REST_API"
import { errorMsg, successMsg } from "../../../shared/SnackBars/index"


export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}

export const loadProfileTemplate = () => (dispatch, getState, { getFirebase }) => {
  dispatch(loadProfileTemplateReq())
  return getFirebase().firestore()
    .collection(`FORM_BUILDER`)
    .doc("iZeS89R7HUaCw65B1Zvfqgcu5vC2-FORM")
    .get()
    .then(doc => {
      console.log("================================",doc.data())
      return dispatch(loadProfileTemplateSuccess(doc.data()))
    }).catch(err => {
      console.error(err);
      return dispatch(loadProfileTemplateFailure("Failed to load profile template"))
    })
}

export const updateProfileTemplate = (data) => (dispatch) => {
  console.log("hhhhhhhhhhhhhhhhhhhhhhhhh",data)
  dispatch(updateProfileTemplateReq())
  return make_API_call("post", "/formbuilder/create-template", data)
    .then(res => {
      successMsg(res.message)
      console.log(res.message)
      return dispatch(updateProfileTemplateSuccess())
    }).catch(err => {
      console.error(err);
      const msg = "Failed to update profile template"
      errorMsg(msg)
      return dispatch(updateProfileTemplateFailure(msg))
    })
}

export const onFormBuilderUpdated=(data)=>{
  const {}= data
}