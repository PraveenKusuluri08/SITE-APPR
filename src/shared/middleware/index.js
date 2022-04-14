import {
  countriesRequest,
  countriesReceived,
  countriesError,
  statesRequest,
  statesReceived,
  statesError,
  loadEmployeeDetailsReq,
  loadEmployeeDetailsSuccess,
  loadEmployeeDetailsFailure
} from "../actions/actionCreators"
import make_API_Call from "../../providers/REST_API"

export function getCountries() {
  return function (dispatch) {
    dispatch(countriesRequest())
    make_API_Call("get", "/loadcountries")
      .then((data) => {
        dispatch(countriesReceived(data))
      })
      .catch((err) => {
        dispatch(countriesError(err))
      })
  }
}

export function getStates(code) {
  return function (dispatch) {
    dispatch(statesRequest())
    make_API_Call("get", `/loadstates?countrycode=${code}`)
      .then((data) => {
        if (data.length) {
          dispatch(statesReceived(data))
        } else {
          dispatch(
            statesReceived([
              {
                id: "no_state",
                state_code: "no_state",
                country_code: code,
                name: "None",
              },
            ])
          )
        }
      })
      .catch((err) => {
        dispatch(statesError(err))
      })
  }
}


export const loadEmployeeDetails = (employeeID) => (dispatch, getState, { getFirebase }) => {
  dispatch(loadEmployeeDetailsReq(employeeID))
  return getFirebase().firestore()
    .collection("EMPLOYEES")
    .doc(employeeID)
    .get()
    .then(doc => {
      return dispatch(loadEmployeeDetailsSuccess({ data: doc.data(), employeeID }))
    }).catch(err => {
      console.error(err);
      return dispatch(loadEmployeeDetailsFailure({ error: err, employeeID }))
    })
}