import React from "react"
import RegistrationForm from "../RegistrationForm"
function Presentation(props) {
  const {
    state,
  } = props
  let email = state["invitationTokenEmail"].data
  console.log("email😅",email,props.token)
  let valid = state["invitationTokenEmail"].error
  console.log(valid.message, email.length ? true : false, email)
  return (
    <div>
      hello
      {email.length ? (
        <RegistrationForm {...props} email={email} token={props.token} />
      ) : (
        <p className="text-center">
          {/* {load ? (
            <Spinner color="dark" />
          ) : ( */}
          <p className="text-center p-3 bg-danger mt-5 w-75 rounded shadow ml-auto mr-auto text-white">
            {valid.message}
          </p>
          {/* )} */}
        </p>
      )}
    </div>
  )
}

export default Presentation
