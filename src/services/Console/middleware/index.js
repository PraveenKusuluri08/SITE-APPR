import {
  setCompanyDetails,
  loadCompanyDetailsReq,
  loadCompanyDetailsSuccess,
  loadCompanyDetailsFailure,
  loadAllModulesFailure,
  loadAllModulesReq,
  loadAllModulesSuccess,
} from "../actions/actionCreators"
import make_API_call from "../../../providers/REST_API"
import {
  stopWaitMsg,
  errorMsg,
  successMsg,
  waitingMsg,
} from "../../../shared/SnackBars/index"
import firebase from "../../../config/fbConfig"

export function uploadCompanyDetails(name, value) {
  return (dispatch, getState) => {
    const initState = getState().console.companyDetails
    if (!name.includes("-")) {
      const data = {
        ...initState,
        [name]: value,
      }
      dispatch(setCompanyDetails(data))
    } else {
      const words = name.split("-")
      const word1 = words[0]
      const word2 = words[1]
      const data = {
        ...initState,
        [word1]: {
          ...initState[word1],
          [word2]: value,
        },
      }
      dispatch(setCompanyDetails(data))
    }
  }
}

export function submitCompanyDetails() {
  return (dispatch, getState) => {
    waitingMsg("Updating company details...")
    const payload = getState().console.companyDetails
    make_API_call("put", "/console/companydetails/edit", payload)
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


export const loadCompanyDetails = () => (dispatch, getState, { getFirebase }) => {
  dispatch(loadCompanyDetailsReq())
  return firebase.firestore().collection("COMPANY_CONFIG").doc("details")
    .get()
    .then(doc => {
      const info = doc.data()
      return dispatch(loadCompanyDetailsSuccess(info))
    }).catch(err => {
      console.error(err);
      return dispatch(loadCompanyDetailsFailure("Failed to load company details"))
    })
}

export function loadAllModules() {
  return function (dispatch) {
    dispatch(loadAllModulesReq())
    make_API_call("get", `/console/modulelevelaccess/allModules`)
      .then((data) => {
        console.log(data)
        return dispatch(loadAllModulesSuccess(data.modulesData))
      })
      .catch((err) => {
        console.error(err)
        return dispatch(loadAllModulesFailure(err))
      })
  }
}

export function updateModules(uid, payload) {
  return function (dispatch) {
    waitingMsg("Updating Modules")
    make_API_call("put", `/console/modulelevelaccess/${uid}/updateModules`, payload)
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