import { combineReducers } from "redux"
import employeeInvitationTokenReducer from "./employeeInvitationTokenReducer"

const rootReducer = combineReducers({
    invitationToken: employeeInvitationTokenReducer,
})

export default rootReducer
