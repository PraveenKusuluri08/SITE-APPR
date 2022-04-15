import { ACTION } from "./actionTypes"

export function countriesRequest() {
  return {
    type: ACTION.REQUEST_COUNTRIES,
  }
}

export function countriesReceived(payload) {
  return {
    type: ACTION.RECEIVE_COUNTRIES,
    payload,
  }
}

export function countriesError(err) {
  return {
    type: ACTION.ERROR_COUNTRIES,
    err,
  }
}

export function statesRequest() {
  return {
    type: ACTION.RECEIVE_STATES,
  }
}

export function statesReceived(payload) {
  return {
    type: ACTION.RECEIVE_STATES,
    payload,
  }
}

export function statesError(err) {
  return {
    type: ACTION.ERROR_STATES,
    err,
  }
}


export const loadEmployeeDetailsReq = (employeeID) => ({
  type: ACTION.LOAD_EMPLOYEE_DETAILS_REQ,
  payload: {
    employeeID: employeeID
  }
})

export const loadEmployeeDetailsSuccess = ({ employeeID, data }) => ({
  type: ACTION.LOAD_EMPLOYEE_DETAILS_SUCCESS,
  payload: {
    employeeID,
    data
  },
})


export const loadEmployeeDetailsFailure = ({ error, employeeID }) => ({
  type: ACTION.LOAD_EMPLOYEE_DETAILS_FAILURE,
  payload: {
    error,
    employeeID
  }
})

