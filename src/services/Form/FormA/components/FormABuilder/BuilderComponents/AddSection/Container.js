import React, { useState } from 'react'
import Presentation from "./Presentation"
import { connect } from "react-redux"
import { _set_state } from "../../../../middleware/FormABuilder"

function Container(props) {
  
  const { state, setState } = props
  const [sectionName, setSectionName] = useState("")
  const [entryType, setEntryType] = useState("")
  console.log("STATESTATE",state)

  const [anchorEl, setAnchorEl] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSectionName("")
  };

  console.log("SECTIONNAME",sectionName)

  const onAddSection = (e) => {
    e.preventDefault();
    const newSection = {
      fields: [],
      sortPriority: 1,
      sortPriority:1,
      sectionName: sectionName,
      access_key: sectionName.replace(/ /g, '').toLowerCase(),
      entryType
    }
    console.log("ONADDD",newSection)
 
      setState({
        formATemplate: {
          ...state.formATemplate,
          data: {
            ...state.formATemplate.data,
            sections: {
              ...state.formATemplate.data.sections,
              [newSection.access_key]: newSection,
            },
          }
        }
      })
      handleClose()
    }
  console.log("STATEEE",state)
  
console.log("ADDSECTION STATE--==>>",state.formATemplate.data.sections)

  return (
    <div>
      <Presentation
        state={state}
        handleClick={handleClick}
        handleClose={handleClose}
        anchorEl={anchorEl}
        onAddSection={onAddSection}
        sectionName={sectionName}
        setSectionName={setSectionName}
        entryType={entryType}
        setEntryType={setEntryType}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.formA.formABuilder
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)

