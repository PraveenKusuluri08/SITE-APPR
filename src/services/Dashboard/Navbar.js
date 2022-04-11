import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { onSignout } from '../Authentication/middleware'
import axios from "axios"
import { getModules } from '../EmployeeManagment/middleware'
function Navbar(props) {
  useEffect(()=>{
    props.getModules()
  },[props.getModules])
  console.log("employeeModules",props.employeeModules)
  return (
    <div>
        <button onClick={props.onSignout}>Logout</button>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>{
  return{
    employeeModules :state.employee.employeeModules
  }
}
const mapDispatchToProps =(dispatch) =>{
    return{
        onSignout:()=>dispatch(onSignout()),
        getModules:()=>dispatch(getModules())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Navbar)
