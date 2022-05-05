import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload,
})
export const loadFormATemplateReq = () => ({
  type: ACTION.LOAD_FORMA_TEMPLATE_REQ
})

export const loadFormATemplateSuccess = (payload) => ({
  type: ACTION.LOAD_FORMA_TEMPLATE_SUCCESS,
  payload
})

export const loadFormATemplateFailure = (payload) => ({
  type: ACTION.LOAD_FORMA_TEMPLATE_FAILURE,
  payload
})

export const updateFormATemplateReq = () => ({
  type: ACTION.UPDATE_FORMA_TEMPLATE_REQ
})

export const updateFormATemplateSuccess = () => ({
  type: ACTION.UPDATE_FORMA_TEMPLATE_SUCCESS
})

export const updateFormATemplateFailure = (payload) => ({
  type: ACTION.UPDATE_FORMA_TEMPLATE_FAILURE,
  payload
})
