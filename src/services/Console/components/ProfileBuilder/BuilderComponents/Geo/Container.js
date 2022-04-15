import React, { useState } from 'react'
import Presentation from "./Presentation"
import { connect } from "react-redux"
import { _set_state } from "../../../../middleware/profileBuilder"

function Container(props) {
  const { sectionKey, setState, state } = props

  const onSelect = (e) => {
    setState({
      newField: {
        ...state.newField,
        country: e.target.value
      }
    })
  }

  return (
    <div>
      <Presentation
        sectionKey={sectionKey}
        state={state}
        onSelect={onSelect}
        countryKey={state.newField.country}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.console.profileBuilder
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)

