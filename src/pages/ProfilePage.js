import React from "react"
import { connect } from "react-redux"
// import EmployeeProfile from "../Services/EmployeeManagment/components/EmployeeProfile"
import RenderProfile from "../services/EmployeeManagment/components/DynamicProfile/RenderProfile/Index"

function EmployeeProfilePage(props) {
  const { auth } = props
  return (
    <div>
      <RenderProfile employeeID={auth.uid} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(EmployeeProfilePage)
