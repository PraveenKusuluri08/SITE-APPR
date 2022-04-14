import { combineReducers } from "redux"
import employeeInvitationTokenReducer from "./employeeInvitationTokenReducer"
import {employeeModulesReducer} from "./employeeModuleReducers"
import dynamicProfileRender from "./dynamicProfileRender"
const rootReducer = combineReducers({
    invitationToken: employeeInvitationTokenReducer,
    modules:employeeModulesReducer,
    dynamicProfileRender: dynamicProfileRender

})

export default rootReducer
