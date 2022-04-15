import ACTIONS from "../actions/actionTypes";

const initialState = {
  data: {},
  err: false,
  loading: false,
};

export const invitationFormTemplateReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ACTIONS.ON_INVITATION_TEMPLATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.ON_INVITATION_TEMPLATE_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case ACTIONS.ON_INVITATION_TEMPLATE_FAILURE:
      return {
        ...state,
        err: payload,
        lading: false,
      };
    default:
      return state;
  }
};
