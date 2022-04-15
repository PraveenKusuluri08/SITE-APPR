import { combineReducers } from "redux";
import { companyDetailsReducer } from "./companyDetailsReducer";
import letterTemplateReducer from "./letterTemplatesReducer";
import modulesReducer from "./modulesReducer";
import profileBuilder from "./profileBuilder";
import { invitationFormTemplateReducer } from "./invitationTemplateReducer";
const rootReducer = combineReducers({
  companyDetails: companyDetailsReducer,
  moduleLevelAccess: modulesReducer,
  letterTemplates: letterTemplateReducer,
  profileBuilder: profileBuilder,
  invitationTemplateReducer: invitationFormTemplateReducer,
});

export default rootReducer;
