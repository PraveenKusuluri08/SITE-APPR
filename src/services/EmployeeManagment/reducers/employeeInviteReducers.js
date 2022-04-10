import ACTION from "../actions/actionTypes"
import initState from "./employeeInviteState"

export function employeeInviteReducer(state = initState, action) {
	switch (action.type) {
		case ACTION.INVITE_EMPLOYEE_REQUEST:
			return {
				...state,
				isSendig: true,
			}

		case ACTION.INVITE_EMPLOYEE_SUCCESS:
			return {
				...state,
				isSending: false,
			}

		case ACTION.INVITE_EMPLOYEE_FAILURE:
			return {
				...state,
				isSending: false,
				error: action.error,
			}

		case ACTION.SET_EXCEL_INVITES:
			return {
				...state,
				excel_invite: action.payload.excel_invite,
			}

		default:
			return state
	}
}
