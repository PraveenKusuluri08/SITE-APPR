import React from 'react'
import { connect } from 'react-redux'
import Presentation from './Presentation'
function Container(props) {
  console.log(props.auth, "auth->nav")
  return (
    <div>
      <Presentation />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Container)
