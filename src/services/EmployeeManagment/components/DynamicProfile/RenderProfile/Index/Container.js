import React, { useEffect } from 'react'
import Presentation from "./Presentation"
import { connect } from "react-redux"
import { _set_state, loadProfileTemplate, loadEmployeeProfile, loadEmployeeProfiles } from "../../../../middleware/dynamicProfileRender"

function Container(props) {
  const { employeeID, setState, state, _load_profile_template, _load_employee_profile,_load_employee_profiles } = props
  useEffect(() => {
    setState({
      employeeID
    })
    _load_profile_template()
    _load_employee_profile(employeeID)
    _load_employee_profiles(employeeID)
  }, [])
  console.log("STATE_EMPLOYEE-------->",state)

  return (
    <div>
      <Presentation
        state={state}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.employee.dynamicProfileRender
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj)),
  _load_profile_template: () => dispatch(loadProfileTemplate()),
  _load_employee_profile: (employeeID) => dispatch(loadEmployeeProfile(employeeID)),
  _load_employee_profiles: (employeeID) => dispatch(loadEmployeeProfiles(employeeID))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
