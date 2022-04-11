import { combineReducers } from "redux"
import employeeInvitationTokenReducer from "./employeeInvitationTokenReducer"
import {employeeModulesReducer} from "./employeeModuleReducers"
const rootReducer = combineReducers({
    invitationToken: employeeInvitationTokenReducer,
    employeeModules:employeeModulesReducer
})

export default rootReducer
