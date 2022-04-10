import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Presentation from "./Presentation"
import { loadInvitationEmail } from "../../../middleware/employeeInvitationToken"

function Container(props) {
  console.log("😆",props.token)
  const { loadInvitaionTokenEmail, state ,isLoaded} = props
  let obj = {
    token: props.token,
  }
  useEffect(() => {
    loadInvitaionTokenEmail(obj)
  }, [])
  console.log("state",state)
  if(!isLoaded)
	return (
	
    <div>
      <Presentation {...props} state={state} />
    </div>
		)
	return <p>Loading...😀</p>
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop,
    state: state.employee.invitationToken,
    isLoaded: state.employee.invitationToken["invitationTokenEmail"].isLoading,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadInvitaionTokenEmail: (payload) => {
      dispatch(loadInvitationEmail(payload))
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)
