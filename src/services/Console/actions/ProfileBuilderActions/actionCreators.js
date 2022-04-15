import ACTION from "./actionTypes"

export const setStateAction = (payload) => ({
  type: ACTION.SET_STATE,
  payload,
})

export const loadProfileTemplateReq = () => ({
  type: ACTION.LOAD_PROFILE_TEMPLATE_REQ
})

export const loadProfileTemplateSuccess = (payload) => ({
  type: ACTION.LOAD_PROFILE_TEMPLATE_SUCCESS,
  payload
})

export const loadProfileTemplateFailure = (payload) => ({
  type: ACTION.LOAD_PROFILE_TEMPLATE_FAILURE,
  payload
})

export const updateProfileTemplateReq = () => ({
  type: ACTION.UPDATE_PROFILE_TEMPLATE_REQ
})

export const updateProfileTemplateSuccess = () => ({
  type: ACTION.UPDATE_PROFILE_TEMPLATE_SUCCESS
})

export const updateProfileTemplateFailure = (payload) => ({
  type: ACTION.UPDATE_PROFILE_TEMPLATE_FAILURE,
  payload
})
