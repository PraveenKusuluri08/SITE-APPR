import React from "react"
import {useParams} from "react-router-dom"
import Template from "../services/EmployeeManagment/components/InvitationTemplate/PostForm"
function EmployeeRegisterPage(props) {
  const params=useParams()
  console.log(params.newToken)
  return (
    <div>
       <Template
        {...props}
        // email={props.match.params.email}
        token={params.newToken}
      />
    </div>
  )
}

export default EmployeeRegisterPage
