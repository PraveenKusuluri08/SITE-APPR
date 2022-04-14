import { successMsg, errorMsg, waitingMsg, stopWaitMsg } from "../../../shared/SnackBars/index"
import make_API_call from "../../../providers/REST_API"

export function addSignature(employeeID, payload) {
  return function (dispatch) {
    waitingMsg("Adding signature...")
    make_API_call("post", `letters/signatures/new?employeeID=${employeeID}`, payload)
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

export function deleteSignature(signatureID) {
  return function (dispatch) {
    waitingMsg("Deleting signature...")
    make_API_call("delete", `letters/signatures/delete?signatureID=${signatureID}`)
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
