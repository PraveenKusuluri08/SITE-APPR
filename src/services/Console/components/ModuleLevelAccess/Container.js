import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Presentation from "./Presentation"
import { loadAllModules, updateModules } from "../../middleware"

function Container(props) {
  const { isLoaded, modulesData, updateModules } = props
  const [state, setState] = useState([])

  useEffect(() => {
    if (isLoaded) setState(modulesData)
  }, [modulesData, isLoaded])

  const { getAllModules } = props

  useEffect(() => {
    getAllModules()
  }, [])

  const handleChange = (e, actionIndex) => {
    const { name, checked } = e.target
    let list = JSON.stringify(state)
    list = JSON.parse(list)
    if (checked) {
      let items = []
      const pairs = {
        "wiki-manager": "wiki",
        "timesheets-manager": "timesheets",
        "immigration-manager": "immigration",
        "task-management-manager": "task-management",
        "employee-self-services-manager": "employee-self-services",
        "accounts-manager": "employees-manager",
      }
      if (Object.keys(pairs).includes(name)) items = [pairs[name], name]
      else items = [name]
      list[actionIndex]["accessibles"] = [
        ...new Set([...list[actionIndex]["accessibles"], ...items]),
      ]
    } else {
      const index = list[actionIndex]["accessibles"].indexOf(name)
      list[actionIndex]["accessibles"].splice(index, 1)
      const pairs = {
        wiki: "wiki-manager",
        timesheets: "timesheets-manager",
        immigration: "immigration-manager",
        "task-management": "task-management-manager",
        "employee-self-services": "employee-self-services-manager",
        "employees-manager": "accounts-manager",
      }
      if (
        Object.keys(pairs).includes(name) &&
        list[actionIndex]["accessibles"].indexOf(pairs[name]) !== -1
      )
        list[actionIndex]["accessibles"].splice(
          list[actionIndex]["accessibles"].indexOf(pairs[name]),
          1
        )
    }
    setState(list)
  }

  const handleUpdate = (index) => {
    const payload = {
      modules: state[index]["accessibles"],
    }
    updateModules(state[index].uid, payload)
  }

  return (
    <div>
      <Presentation
        _logged_in_employee={props._logged_in_employee}
        isLoaded={isLoaded}
        modulesData={state}
        handleChange={handleChange}
        handleUpdate={handleUpdate}
      />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.console.moduleLevelAccess, _logged_in_employee: state.firebase.auth.uid }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllModules: () => {
      dispatch(loadAllModules())
    },
    updateModules: (uid, payload) => {
      dispatch(updateModules(uid, payload))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
