import authReducers from "../../services/Authentication/reducers/index"
import employeeReducers from "../../services/EmployeeManagment/reducers/index"
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore"
import { Actions } from "../../services/Authentication/actions/actionTypes";
const appReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  authentication: authReducers,
  employee: employeeReducers
});

const rootReducer = (state, action) => {
  if (action.type === Actions.SIGNOUT_SUCCESS) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer
