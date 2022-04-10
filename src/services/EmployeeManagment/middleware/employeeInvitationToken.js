import {
  loadInvitationEmailRequest,
  loadInvitationEmailSuccess,
  loadInvitationEmailFailure,
  setListener,
  setStateAction,
  loadInvitatedEmpInfoRequest,
  loadInvitatedEmpInfoFailure,
  loadInvitatedEmpInfoSuccess,
} from "../actions/actionCreators"
import {
  errorMsg,
} from "../../../shared/snakbars/index"
import axios from "axios"
import make_API_call from "../../../providers/REST_API"
import {API} from "../../../config/API"

export const setState = (obj) => (dispatch) => {
  return dispatch(setStateAction(obj))
}

export const loadInvitationEmail = (payload) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  console.log("payload", payload)
  dispatch(loadInvitationEmailRequest())
  let subscribe = ""
  axios.post(`${API}/auth/validateinvitationtoken`,payload)
    .then((data) => {
      console.log(data, "tokendddd")
      subscribe = data
      dispatch(loadInvitationEmailSuccess(data))
    })
    .catch((err) => {
      console.log(err, "token")
      subscribe = err
      dispatch(loadInvitationEmailFailure(err))
    })

  dispatch(setListener(subscribe, "invitationTokenEmail"))
}


export const loadInvitedEmployeeInfo = (payload) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  dispatch(loadInvitatedEmpInfoRequest())
  const { email } = payload
  console.log(email)
  const subscribe = getFirebase()
    .firestore()
    .collection("EMPLOYEES")
    .doc(email)
    .get()
    .then(
      (snap) => {
        const data = snap.data().personal
        console.log(snap.data())
        return dispatch(loadInvitatedEmpInfoSuccess(data))
      },
      (err) => {
        console.error(err)
        const msg = "Failed to load Employee"
        errorMsg(msg)
        return dispatch(loadInvitatedEmpInfoFailure(msg))
      }
    )

  dispatch(setListener(subscribe, "invitationTokenEmpInfo"))
}
