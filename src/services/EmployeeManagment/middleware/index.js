import axios from "axios"
import {
  modulesRequest,
  modulesSuccess,
  modulesFailure,
  inviteEmployeeRequest,
  inviteEmployeeSuccess,
  inviteEmployeeError,
  employeesRequest,
  employeesSuccess,
  employeesFailure,
  allModulesFailure,
  allModulesSuccess,
  allModulesRequest,
  employeeRegistrationRequest,
  employeeRegistrationSuccess,
  employeeRegistrationFailure,
} from "../actions/actionCreators"
import { waitingMsg, stopWaitMsg, errorMsg, successMsg } from "../../../shared/snakbars/index"
import validate from "../../../shared/validation"
import { API } from "../../../config/API"

export function getModules() {
  return (dispatch) => {
    dispatch(modulesRequest())
    axios
      .get("/employee/modules")
      .then((response) => {
        console.log("response",response)
        return dispatch(
          modulesSuccess({
            accessModules: response.data,
          })
        )
      })
      .catch((error) => {
        console.error(error)
        dispatch(modulesFailure({ ...error }))
      })
  }
}

export function getAllModules() {
  return (dispatch) => {
    dispatch(allModulesRequest())
    axios
      .get("/employee/allmodules")
      .then((response) => {
        console.log(response.data)
        dispatch(allModulesSuccess({ allModules: response.data }))
      })
      .catch((err) => {
        console.error(err)
        dispatch(allModulesFailure(err))
      })
  }
}

export function getEmployees() {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(employeesRequest())
    const firebase = getFirebase()
    firebase
      .firestore()
      .collection("EMPLOYEES")
      .onSnapshot((querySnapshot) => {
        if (querySnapshot.size) {
          const employeelist = querySnapshot.docs.map((doc) => doc.data())
          dispatch(employeesSuccess({ employeelist }))
        } else {
          dispatch(employeesFailure({ employeelist: [] }))
        }
      })
  }
}


export function inviteEmployee(payload) {
  return (dispatch) => {
    dispatch(inviteEmployeeRequest())

    const { email, firstname, lastname, dob, branch, phonenumber } = payload
    if (!validate.checkEmail(email)) return errorMsg("Invalid email format")
    if(!validate.checkNumber(phonenumber)) return errorMsg("Invalid phone number")
    waitingMsg("Invitation mail is being sent...")
    axios
      .post("/auth/inviteemployee", {
        employeeEmail: email,
        employeeInfo: {
          branch,
          dob,
          firstname,
          lastname,
          phonenumber,
        },
      })
      .then((res) => {
        stopWaitMsg()
        successMsg(email + " has been invited successfully")
        dispatch(inviteEmployeeSuccess())
      })
      .catch((err) => {
        stopWaitMsg()
        errorMsg(err.response.data.message)
        dispatch(inviteEmployeeError())
      })
  }
}



export function employeeRegistration(payload, history) {
  return (dispatch) => {
    dispatch(employeeRegistrationRequest())

    // const {} = payload
    waitingMsg("Registration is being processed...")
    axios
      .post(`${API}/auth/createemployee`, payload)
      .then((res) => {
        stopWaitMsg()
        successMsg("Successfully Registered")
        dispatch(employeeRegistrationSuccess())
        history.push("/")
      })
      .catch((err) => {
        console.log(err)
        stopWaitMsg()
        errorMsg("Something went wrong!")
        dispatch(employeeRegistrationFailure())
      })
  }
}
