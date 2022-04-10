import React from 'react'
import { connect } from 'react-redux'
import { onSignout } from '../Authentication/middleware'

function Navbar(props) {
  return (
    <div>
        <button onClick={props.onSignout}>Logout</button>
    </div>
  )
}
const mapDispatchToProps =(dispatch) =>{
    return{
        onSignout:()=>dispatch(onSignout())
    }
}
export default connect(null,mapDispatchToProps) (Navbar)
