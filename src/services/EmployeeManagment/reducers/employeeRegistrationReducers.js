import ACTION from "../actions/actionTypes"
import initState from "./employeeRegistrationState"

export function employeeRegistrationReducer(state = initState, action) {
  switch (action.type) {
    case ACTION.EMPLOYEE_REGISTRATION_REQUEST:
      return {
        ...state,
        isRegistering: true,
      }

    case ACTION.EMPLOYEE_REGISTRATION_SUCCESS:
      return {
        ...state,
        isRegistering: false,
      }

    case ACTION.EMPLOYEE_REGISTRATION_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.error,
      }
    default:
      return state
  }
}
