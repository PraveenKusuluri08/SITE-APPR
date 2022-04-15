import React from 'react'
import Presentation from "./Presentation"
import { _set_state } from "../../../../../middleware/dynamicProfileRender"
import { connect } from "react-redux"
import initialState from "../../../../../state/dynamicProfileRender"

function Container(props) {
  const { setState, state, sectionKey, index, editingData, isEdit } = props
  const onEdit = () => {
    if ((state.editingSection.access_key === sectionKey && index === state.editingIndex)) {
      return setState({
        editingSection: initialState.editingSection,
        editingIndex: null,
        editingData: {}
      })
    }
    return setState({
      editingSection: state.profileTemplate.data.sections[sectionKey],
      editingIndex: index,
      editingData: editingData
    })
  }

  return (
    <div>
      <Presentation
        onEdit={onEdit}
        isEdit={isEdit}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.employee.dynamicProfileRender
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)