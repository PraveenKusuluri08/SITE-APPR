import React, { useState } from 'react'
import Presentation from "./Presentation"
import { connect } from "react-redux"
import { _set_state, loadProfileTemplate } from "../../../middleware/profileBuilder"

function Container(props) {
  const { section, sectionKey, setState, state } = props
  const obj = state.profileTemplate?.data?.sections[sectionKey]?.fields.reduce((init, item) => ({ ...init, [item.name]: "" }), {})
  console.log("OBJECT",obj)
  const [dummyData, setDummyData] = useState(obj)

  const setData = (data) => {
    return setDummyData((prevState) => ({
      ...prevState,
      ...data
    }))
  }
  console.log("state->ProfileBuilder",state.profileTemplate,sectionKey)
 
  return (
    <Presentation
      fields={state.profileTemplate?.data?.sections[sectionKey]?.fields || []}
      section={state.profileTemplate?.data?.sections[sectionKey]}
      sectionKey={sectionKey}
      dummyData={dummyData}
      setData={setData}
      />
   
  )
}

const mapStateToProps = state => ({
  state: state.console.profileBuilder
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj)),
  _load_profile_template: () => dispatch(loadProfileTemplate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)
