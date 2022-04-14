import ACTION from "../actions/actionTypes"
import initState from "./modulesState"

export default function modulesReducer(state = initState, action) {
  switch (action.type) {
    case ACTION.LOAD_ALL_MODULES_REQ:
      return {
        ...state,
        isLoaded: false,
        isEmpty: false,
        error: null,
      }

    case ACTION.LOAD_ALL_MODULES_SUCCESS:
      return {
        ...state,
        modulesData: action.payload,
        isLoaded: true,
        isEmpty: false,
        error: null,
      }

    case ACTION.LOAD_ALL_MODULES_FAILURE:
      return {
        ...state,
        modulesData: [],
        isLoaded: true,
        isEmpty: true,
        error: action.err,
      }

    case ACTION.UPDATE_MODULES_REQ:
      return {
        ...state,
        isUpdating: true,
      }

    case ACTION.UPDATE_MODULES_FAILURE:
      return {
        ...state,
        isUpdating: false,
        update_failure_msg: action.msg,
      }

    case ACTION.UPDATE_MODULES_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        update_succes_msg: action.msg,
      }

    default:
      return state
  }
}
