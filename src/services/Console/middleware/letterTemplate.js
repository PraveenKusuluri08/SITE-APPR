import { setLetterContent } from "../actions/actionCreators"
import { errorMsg, successMsg, waitingMsg, stopWaitMsg } from "../../../shared/SnackBars/index"
import make_API_call from "../../../providers/REST_API"

export function _set_state(payload) {
  return function (dispatch) {
    dispatch(setLetterContent(payload))
  }
}

export function createTemplate(payload) {
  return function (dispatch, getState) {
    waitingMsg("Creating template...")
    make_API_call("post", "/console/lettertemplates/create", payload)
      .then((data) => {
        console.log(data)
        stopWaitMsg()
        successMsg(data.message)
      })
      .catch((err) => {
        stopWaitMsg()
        errorMsg(err.message)
      })
  }
}

export function updateTemplate(payload, id) {
  return function (dispatch, getState) {
    waitingMsg("Updating template...")
    make_API_call("put", `/console/lettertemplates/update/${id}`, payload)
      .then((data) => {
        console.log(data)
        stopWaitMsg()
        successMsg(data.message)
      })
      .catch((err) => {
        stopWaitMsg()
        errorMsg(err.message)
      })
  }
}

export function deleteTemplate(id, callback) {
  return function (dispatch, getState) {
    waitingMsg("Deleting template...")
    make_API_call("delete", `/console/lettertemplates/delete/${id}`)
      .then((data) => {
        console.log(data)
        stopWaitMsg()
        successMsg(data.message)
        callback()
      })
      .catch((err) => {
        stopWaitMsg()
        errorMsg(err.message)
      })
  }
}
