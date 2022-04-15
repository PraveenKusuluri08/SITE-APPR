import React from "react"
import Prompt from "../snackBars"
import HoldPrompt from "../progressSnackBars"
import { render } from "react-dom"

export const waitingMsg = (content) => {
	return render(
		<HoldPrompt open={true} content={content} severity='info' />,
		document.getElementById("notifications-hold-box")
	)
}

export const stopWaitMsg = () => {
	return render(<div></div>, document.getElementById("notifications-hold-box"))
}

export const successMsg = (content) => {
	return render(
		<Prompt open={true} content={content} severity='success' />,
		document.getElementById("notifications-box")
	)
}

export const errorMsg = (content) => {
	return render(
		<Prompt open={true} content={content} severity='error' />,
		document.getElementById("notifications-box")
	)
}
