import React, { useEffect, useState } from 'react'
import Presentation from "./Presentation"
import { _set_state } from "../../../../../middleware/dynamicProfileRender"
import { connect } from "react-redux"

function Container(props) {
  const { section } = props
  const [sectionData, setSectionData] = useState(section)
  const [cardState, setCardState] = useState({
    noOfFields: 0,
    height: 200,
  })

  const assignCardProperties = ({ noOfFields }) => {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    return {
      height: 250,
      noOfFields: 0,
      overflowY: "scroll"
    }
  }

  useEffect(() => {
    setSectionData(section)
    const noOfFields = section.fields.filter(f => f.isExist === true).length
    setCardState({
      noOfFields: noOfFields,
      ...assignCardProperties({ noOfFields })
    })
  }, [JSON.stringify(section)])

  return (
    <Presentation
      sectionData={sectionData}
      cardState={cardState}
      {...props}
    />
  )
}

const mapStateToProps = state => ({
  state: state.employee.dynamicProfileRender
})

const mapDispatchToProps = dispatch => ({
  setState: (obj) => dispatch(_set_state(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)