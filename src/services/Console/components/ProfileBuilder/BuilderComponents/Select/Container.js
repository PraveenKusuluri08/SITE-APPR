import React, { useState } from 'react'
import Presentation from "./Presentation"
import { connect } from "react-redux"
import { _set_state } from "../../../../middleware/profileBuilder"

function Container(props) {
  const { state, setState } = props
  const [dropDownItem, setDropDownItem] = useState("")

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDropDownItem("")
  };

  const deleteChip = (label) => {
    setState({
      newField: {
        ...state.newField,
        values: state.newField.values.filter(data => data !== label)
      }
    })
  }

  const onAdd = (e) => {
    e.preventDefault();
    handleClose()
    setState({
      newField: {
        ...state.newField,
        values: [...state.newField.values, dropDownItem]
      }
    })
  }
  return (
    <div>
      <Presentation
        state={state}
        values={state.newField.values}
        deleteChip={deleteChip}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
        onAdd={onAdd}
        dropDownItem={dropDownItem}
        setDropDownItem={setDropDownItem}
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

