import ACTION from "../actions/actionTypes"
import initialState from "../state/FormABuilder"


export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION.SET_STATE:
      return {
        ...state,
        ...payload
      }

    case ACTION.LOAD_FORMA_TEMPLATE_REQ:
      return {
        ...state,
        formATemplate: {
          isLoading: true,
          data: {},
          error: "",
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.LOAD_FORMA_TEMPLATE_SUCCESS:
      return {
        ...state,
        formATemplate: {
          isLoading: false,
          data: payload,
          error: "",
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.LOAD_FORMA_TEMPLATE_FAILURE:
      return {
        ...state,
        formATemplate: {
          isLoading: false,
          data: {},
          error: payload,
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.UPDATE_FORMA_TEMPLATE_REQ:
      return {
        ...state,
        formATemplate: {
          ...state.formATemplate,
          isUpdating: true,
          errorWhileUpdating: ""
        },
      }

    case ACTION.UPDATE_FORMA_TEMPLATE_SUCCESS:
      return {
        ...state,
        formATemplate: {
          ...state.formATemplate,
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.UPDATE_FORMA_TEMPLATE_FAILURE:
      return {
        ...state,
        formATemplate: {
          ...state.formATemplate,
          isUpdating: false,
          errorWhileUpdating: payload
        },
      }

    default:
      return state
  }
}
