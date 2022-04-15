import ACTION from "./actionTypes";

export function setCompanyDetails(payload) {
  return {
    type: ACTION.SET_COMPANY_DETAILS,
    payload,
  };
}

export const loadCompanyDetailsReq = () => ({
  type: ACTION.LOAD_COMPANY_DETAILS_REQ,
});

export const loadCompanyDetailsSuccess = (payload) => ({
  type: ACTION.LOAD_COMPANY_DETAILS_SUCCESS,
  payload,
});

export const loadCompanyDetailsFailure = (payload) => ({
  type: ACTION.LOAD_COMPANY_DETAILS_FAILURE,
  payload,
});

export const loadAllModulesReq = () => ({
  type: ACTION.LOAD_ALL_MODULES_REQ,
});

export const loadAllModulesSuccess = (payload) => ({
  type: ACTION.LOAD_ALL_MODULES_SUCCESS,
  payload,
});

export const loadAllModulesFailure = (err) => ({
  type: ACTION.LOAD_ALL_MODULES_FAILURE,
  err,
});

export const setLetterContent = (payload) => ({
  type: ACTION.SET_LETTER_CONTENT,
  payload,
});

export const onInvitationTemplateReq = () => {
  return {
    type: ACTION.ON_INVITATION_TEMPLATE_REQUEST,
  };
};

export const onInvitationSuccess = (data) => {
  return {
    type: ACTION.ON_INVITATION_TEMPLATE_SUCCESS,
    payload: data,
  };
};
export const onInvitationFailure = (err) => ({
  type: ACTION.LOAD_ALL_MODULES_FAILURE,
  err,
});
