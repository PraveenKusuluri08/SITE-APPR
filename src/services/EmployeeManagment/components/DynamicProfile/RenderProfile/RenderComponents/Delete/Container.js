import React, { useState } from 'react'
import Presentation from "./Presentation"
import { _set_state, updateProfile } from "../../../../../middleware/dynamicProfileRender"
import { connect } from "react-redux"

function Container(props) {
  const { setState, state, section, index, _update_profile } = props
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onDelete = () => {
    const profile = JSON.parse(JSON.stringify(state.employeeProfile.data))
    const data = profile[section.access_key]
    data.splice(index, 1)
    let modifiedProfile = {
      [section.access_key]: data
    }
    _update_profile(modifiedProfile, state.employeeProfile.data.employeeID, modifiedProfile)
    handleClose()
  }



  return (
    <Presentation
      {...props}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
      onDelete={onDelete}
    />
  )
}

const mapStateToProps = state => ({
  state: state.employee.dynamicProfileRender
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj)),
  _update_profile: (obj, employeeID, modifiedProfile) => dispatch(updateProfile(obj, employeeID, modifiedProfile))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)