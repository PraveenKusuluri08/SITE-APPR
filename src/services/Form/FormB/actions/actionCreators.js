import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload,
})
export const loadFormBTemplateReq = () => ({
  type: ACTION.LOAD_FORMB_TEMPLATE_REQ
})

export const loadFormBTemplateSuccess = (payload) => ({
  type: ACTION.LOAD_FORMB_TEMPLATE_SUCCESS,
  payload
})

export const loadFormBTemplateFailure = (payload) => ({
  type: ACTION.LOAD_FORMB_TEMPLATE_FAILURE,
  payload
})

export const updateFormBTemplateReq = () => ({
  type: ACTION.LOAD_FORMB_TEMPLATE_REQ
})
export const updateFormBTemplateSuccess = () => ({
  type: ACTION.LOAD_FORMB_TEMPLATE_SUCCESS
})

export const updateFormBTemplateFailure = (payload) => ({
  type: ACTION.LOAD_FORMB_TEMPLATE_FAILURE,
  payload
})
