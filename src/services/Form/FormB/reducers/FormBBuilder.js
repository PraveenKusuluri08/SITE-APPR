import ACTION from "../actions/actionTypes"
import initialState from "../state/FormBBuilder"


export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION.SET_STATE:
      return {
        ...state,
        ...payload
      }

    case ACTION.LOAD_FORMB_TEMPLATE_REQ:
      return {
        ...state,
        formBTemplate: {
          isLoading: true,
          data: {},
          error: "",
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.LOAD_FORMB_TEMPLATE_SUCCESS:
      return {
        ...state,
        formBTemplate: {
          isLoading: false,
          data: payload,
          error: "",
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.LOAD_FORMB_TEMPLATE_FAILURE:
      return {
        ...state,
        formBTemplate: {
          isLoading: false,
          data: {},
          error: payload,
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.UPDATE_FORMB_TEMPLATE_REQ:
      return {
        ...state,
        formBTemplate: {
          ...state.formBTemplate,
          isUpdating: true,
          errorWhileUpdating: ""
        },
      }

    case ACTION.UPDATE_FORMB_TEMPLATE_SUCCESS:
      return {
        ...state,
        formBTemplate: {
          ...state.formBTemplate,
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.UPDATE_FORMB_TEMPLATE_FAILURE:
      return {
        ...state,
        formBTemplate: {
          ...state.formBTemplate,
          isUpdating: false,
          errorWhileUpdating: payload
        },
      }

    default:
      return state
  }
}
