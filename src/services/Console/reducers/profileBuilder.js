import ACTION from "../actions/ProfileBuilderActions/actionTypes"
import initialState from "../state/profileBuilder"


export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ACTION.SET_STATE:
      return {
        ...state,
        ...payload
      }

    case ACTION.LOAD_PROFILE_TEMPLATE_REQ:
      return {
        ...state,
        profileTemplate: {
          isLoading: true,
          data: {},
          error: "",
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.LOAD_PROFILE_TEMPLATE_SUCCESS:
      return {
        ...state,
        profileTemplate: {
          isLoading: false,
          data: payload,
          error: "",
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.LOAD_PROFILE_TEMPLATE_FAILURE:
      return {
        ...state,
        profileTemplate: {
          isLoading: false,
          data: {},
          error: payload,
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.UPDATE_PROFILE_TEMPLATE_REQ:
      return {
        ...state,
        profileTemplate: {
          ...state.profileTemplate,
          isUpdating: true,
          errorWhileUpdating: ""
        },
      }

    case ACTION.UPDATE_PROFILE_TEMPLATE_SUCCESS:
      return {
        ...state,
        profileTemplate: {
          ...state.profileTemplate,
          isUpdating: false,
          errorWhileUpdating: ""
        },
      }

    case ACTION.UPDATE_PROFILE_TEMPLATE_FAILURE:
      return {
        ...state,
        profileTemplate: {
          ...state.profileTemplate,
          isUpdating: false,
          errorWhileUpdating: payload
        },
      }

    default:
      return state
  }
}
