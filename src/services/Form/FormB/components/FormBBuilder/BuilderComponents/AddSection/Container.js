import React, { useState } from 'react'
import Presentation from "./Presentation"
import { connect } from "react-redux"
import { _set_state } from "../../../../middleware/FormBBuilder"

function Container(props) {
  const { state, setState } = props
  const [sectionName, setSectionName] = useState("")
  const [entryType, setEntryType] = useState("")

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSectionName("")
  };

  const onAddSection = (e) => {
    e.preventDefault();
    const newSection = {
      fields: [],
      sortPriority:1,
      sectionName: sectionName,
      access_key: sectionName.replace(/ /g, '').toLowerCase(),
      entryType
    }

      setState({
        formBTemplate: {
          ...state.formBTemplate,
          data: {
            ...state.formBTemplate.data,
            sections: {
              ...state.formBTemplate.data.sections,
              [newSection.access_key]: newSection
            }
          }
        }
      })
      handleClose()
    }
  
console.log("ADDSECTION STATE--==>>",state)
console.log("SECTIONNAME",sectionName)
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
  state: state.formB.formBBuilder
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)

