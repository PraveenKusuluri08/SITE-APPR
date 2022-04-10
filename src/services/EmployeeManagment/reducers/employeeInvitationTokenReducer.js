import ACTION from "../actions/actionTypes"
import initState from "./employeeInvitationTokenState"

export default (state = initState, { type, payload }) => {
  switch (type) {
    case ACTION.LOAD_INVITATION_EMAIL_REQUEST:
      return {
        ...state,
        invitationTokenEmail: {
          ...state.invitationTokenEmail,
          isLoading: true,
          error: "",
        },
      }

    case ACTION.LOAD_INVITATION_EMAIL_SUCCESS:
      return {
        ...state,
        invitationTokenEmail: {
          ...state.invitationTokenEmail,
          isLoading: false,
          data: payload.data,
          error: "",
          noOfLoadings: state.invitationTokenEmail.noOfLoadings + 1,
        },
      }

    case ACTION.LOAD_INVITATION_EMAIL_FAILURE:
      return {
        ...state,
        invitationTokenEmail: {
          ...state.invitationTokenEmail,
          isLoading: false,
          error: payload,
        },
      }

    case ACTION.LOAD_INVITATED_EMPIFNO_REQUEST:
      return {
        ...state,
        invitationTokenEmpInfo: {
          ...state.invitationTokenEmpInfo,
          isLoading: true,
          error: "",
        },
      }

    case ACTION.LOAD_INVITATED_EMPIFNO_SUCCESS:
      return {
        ...state,
        invitationTokenEmpInfo: {
          ...state.invitationTokenEmpInfo,
          isLoading: false,
          data: payload,
          error: "",
          noOfLoadings: state.invitationTokenEmpInfo.noOfLoadings + 1,
        },
      }

    case ACTION.LOAD_INVITATED_EMPIFNO_FAILURE:
      return {
        ...state,
        invitationTokenEmpInfo: {
          ...state.invitationTokenEmpInfo,
          isLoading: false,
          error: payload,
        },
      }

    default:
      return state
  }
}
