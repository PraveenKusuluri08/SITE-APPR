import ACTION from "../actions/actionTypes"
import letterTemplatesState from "./letterTemplatesState"

export default function letterTemplateReducer(state = letterTemplatesState, action) {
  switch (action.type) {
    case ACTION.SET_LETTER_CONTENT:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}
