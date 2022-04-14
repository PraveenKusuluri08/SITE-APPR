import { combineReducers } from "redux"
import { companyDetailsReducer } from "./companyDetailsReducer"
import letterTemplateReducer from "./letterTemplatesReducer"
import modulesReducer from "./modulesReducer"
import profileBuilder from "./profileBuilder"

const rootReducer = combineReducers({
  companyDetails: companyDetailsReducer,
  moduleLevelAccess: modulesReducer,
  letterTemplates: letterTemplateReducer,
  profileBuilder: profileBuilder
})

export default rootReducer
