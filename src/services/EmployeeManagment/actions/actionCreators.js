import ACTION from "./actionTypes";

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload,
});

export const setListener = (listener, type) => ({
  type: ACTION.SET_LISTENER,
  payload: {
    listener,
    type,
  },
});

export function loadInvitationEmailRequest() {
  return {
    type: ACTION.LOAD_INVITATION_EMAIL_REQUEST,
  };
}

export function loadInvitationEmailSuccess(payload) {
  return {
    type: ACTION.LOAD_INVITATION_EMAIL_SUCCESS,
    payload,
  };
}

export function loadInvitationEmailFailure(payload) {
  return {
    type: ACTION.LOAD_INVITATION_EMAIL_FAILURE,
    payload,
  };
}

export function loadInvitatedEmpInfoRequest() {
  return {
    type: ACTION.LOAD_INVITATED_EMPIFNO_REQUEST,
  };
}

export function loadInvitatedEmpInfoSuccess(payload) {
  return {
    type: ACTION.LOAD_INVITATED_EMPIFNO_SUCCESS,
    payload,
  };
}

export function loadInvitatedEmpInfoFailure(payload) {
  return {
    type: ACTION.LOAD_INVITATED_EMPIFNO_FAILURE,
    payload,
  };
}

export function inviteEmployeeRequest() {
  return {
    type: ACTION.INVITE_EMPLOYEE_REQUEST,
  };
}

export function inviteEmployeeSuccess() {
  return {
    type: ACTION.INVITE_EMPLOYEE_SUCCESS,
  };
}

export function inviteEmployeeError(error) {
  return {
    type: ACTION.INVITE_EMPLOYEE_FAILURE,
    error,
  };
}

export function loadAllEmployeesRequest() {
  return {
    type: ACTION.LOAD_ALL_EMPLOYEES_REQUEST,
  };
}

export function loadAllEmployeesSuccess(payload) {
  return {
    type: ACTION.LOAD_ALL_EMPLOYEES_SUCCESS,
    payload,
  };
}

export function loadAllEmployeesFailure(payload) {
  return {
    type: ACTION.LOAD_ALL_EMPLOYEES_FAILURE,
    payload,
  };
}

export function allModulesRequest() {
  return {
    type: ACTION.ALL_MODULES_REQUEST,
  };
}

export function allModulesSuccess(payload) {
  return {
    type: ACTION.ALL_MODULES_SUCCESS,
    payload,
  };
}

export function allModulesFailure(error) {
  return {
    type: ACTION.ALL_MODULES_FAILURE,
    error,
  };
}

export function employeeRegistrationRequest() {
  return {
    type: ACTION.EMPLOYEE_REGISTRATION_REQUEST,
  };
}

export function employeeRegistrationSuccess(payload) {
  return {
    type: ACTION.EMPLOYEE_REGISTRATION_SUCCESS,
    payload,
  };
}

export function employeeRegistrationFailure(error) {
  return {
    type: ACTION.EMPLOYEE_REGISTRATION_FAILURE,
    error,
  };
}


export function employeesRequest() {
  return {
    type: ACTION.EMPLOYEES_REQUEST,
  };
}

export function employeesSuccess(payload) {
  return {
    type: ACTION.EMPLOYEES_SUCCESS,
    payload,
  };
}

export function employeesFailure(error) {
  return {
    type: ACTION.EMPLOYEES_FAILURE,
    error,
  };
}

export function modulesRequest() {
  return {
    type: ACTION.MODULES_REQUEST,
  };
}

export function modulesSuccess(payload) {
  return {
    type: ACTION.MODULES_SUCCESS,
    payload,
  };
}

export function modulesFailure(error) {
  return {
    type: ACTION.MODULES_FAILURE,
    error,
  };
}