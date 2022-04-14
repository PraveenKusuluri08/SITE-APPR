import initialState from "../state/employeeProfile";
import ACTION from "../actions/actionTypes";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION.LOAD_EMPLOYEE_PROFILE_REQUEST:
      return {
        ...state,
        isEmployeeProfileLoading: true,
        profileLoadError: "",
      };

    case ACTION.LOAD_EMPLOYEE_PROFILE_SUCCESS:
      return {
        ...state,
        isEmployeeProfileLoading: false,
        profileLoadError: "",
        profile: payload
      };
    case ACTION.LOAD_EMPLOYEE_PROFILE_SUCCESS:
      return {
        ...state,
        isEmployeeProfileLoading: false,
        profileLoadError: payload,
      };

    case ACTION.UPDATE_EMPLOYEE_PROFILE_REQUEST:
      return {
        ...state,
        isProfileUpdating: true,
        profileUpdateError: "",
      };

    case ACTION.UPDATE_EMPLOYEE_PROFILE_SUCCESS:
      return {
        ...state,
        isProfileUpdating: false,
        profileUpdateError: "",
      };

    case ACTION.UPDATE_EMPLOYEE_PROFILE_FAILURE:
      return {
        ...state,
        isProfileUpdating: false,
        profileUpdateError: payload,
      };

    default:
      return state;
  }
};
