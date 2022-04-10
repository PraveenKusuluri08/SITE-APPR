import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"
import { render } from "react-dom"
function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}))

export default function CustomizedSnackbars(props) {
	const classes = useStyles()

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return
		}
		render(<div></div>, document.getElementById("notifications-box"))
	}

	setTimeout(() => {
		render(<div></div>, document.getElementById("notifications-box"))
	}, 3000)

	return (
		<div className={classes.root}>
			<Snackbar open={props.open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={props.severity}>
					{props.content}
				</Alert>
			</Snackbar>
		</div>
	)
}
