import React from "react"
// import { Icon, Label } from "semantic-ui-react"
import { Form, FormGroup, Progress} from "reactstrap"
import Avatar from "@material-ui/core/Avatar"
import Template from "../Template"
import AvatarCropping from "../../../../../shared/cropper"
import useStyles from "../../../styles/idCard"
import { InputBase, Paper } from "@material-ui/core"
import { TextField ,Button} from "@material-ui/core"
// import { Scrollbars } from 'react-custom-scrollbars';
// import Scroll from 'react-scroll';
import { CheckIcon } from "@chakra-ui/icons"

function RegistrationForm(props) {
  // var Element = Scroll.Element;
  const {
    state,
    handleChange,
    handleChange1,
    handleChangePass,
    handleStateSet,
    profileUrl,
    err,
    Register,
    empInfo,
    documentUrl
  } = props
  const cardStyles = useStyles()
  console.log("hayyimage",profileUrl)

  let EmployeeData = empInfo["invitationTokenEmpInfo"].data
    return (
      // <Element name="test7" className="element" id="containerElement" style={{
      //   position: 'relative',
      //   height: '700px',
      //   overflow: 'scroll',
      //   marginBottom: '100px'
      // }}>
      <div style={{marginLeft:"350px"}}>
      {/* <Scrollbars style={{ width: 830, height: 600 }}> */}
  
      <Paper style={{width:"800px",alignItems:"center"}}>
      <Form
        className="widthsetter p-4 bg-light m-5 rounded shadow ml-auto mr-auto"
        onSubmit={Register}     
      >
        {/* <div className="text-center"> */}
        <div style={{textAlign:"center"}}>
          {state.isUploading ? (
            <Progress
              animated
              striped
              color="success"
              className=""
              value={state.progress}
            />
          ) : (
            <p></p>
          )}
          <div>
            {profileUrl ? (
            null
            ) :   <Avatar alt="" className={cardStyles.avatar}   src={profileUrl} />}
          </div>
          <label class="fileContainer">
            <p style={{alignItems:"center"}}>
              Profile pic<span className="req-field">*</span>
            </p>
            <AvatarCropping
              handleChange={handleChange1}
              useremail=""
              name="Choose a profile Picture"
            />
          </label>
        </div>
        <Template
          registeringEmail={props.email}
          handleStateSet={handleStateSet}
          empInfo={EmployeeData}
        />
          <label for="confirmPassword">Set Password</label><br/>
          <TextField
            autoComplete={false}
            fullWidth 
            size="small" 
            type="password"
            name="Password"
            onChange={handleChangePass}
            id="setPassword"
            placeholder=""
            variant="outlined"
          />
          <label for="confirmPassword">Confirm Password</label>
          <TextField 
            autoComplete={false}
            size="small" 
            fullWidth 
            type="password"
            name="confirmPassword"
            onChange={handleChangePass}
            id="confirmPassword"
            placeholder=""
            variant="outlined"
          />
          <br /><br/>
          {state.setPassword === state.confirmPassword &&
          state.setPassword !== "" ? (
            <div>
                <Button  style={{backgroundColor:"skyblue",height:"30px"}} >
              <CheckIcon name="checkmark" color="green" />
              Passwords must match
           </Button><br/><br/>
            </div>
          
          ) : (
            <div>     
                     <Button style={{backgroundColor:"skyblue",height:"30px"}}>Passwords must match</Button><br/><br/>
            </div>
          )}
          {state.setPassword.length < 8 ? (
            <div>            
               <Button style={{backgroundColor:"skyblue",height:"30px"}}>Min 8 characters Needed </Button><br/><br/>
            </div>
          ) : (
             <div>
                 <Button style={{backgroundColor:"skyblue",height:"30px"}}>
                 <CheckIcon name="checkmark" color="green" />
          Min 8 Characters nedded
            </Button><br/>
             </div>
            
          )}
          <br/>
       {state.registration?(
     <Button type="button" className="btn btn-primary w-100" disabled>
        Registering...
     </Button>

       ):state.setPassword.length>7&&
       state.setPassword === state.confirmPassword&&
       err.contactOk&&
       err.contactOk 
       ?(
        <Button variant="contained " color="primary"  style={{  
          backgroundColor: "#21b6ae",
          fontSize: "18px",
        width:"797px"}}  >Register</Button>
       ):(
        <Button variant="contained" style={{width:"797px"}} disabled>
        Register
      </Button>
       )
      }
        {/* {state.registering ? (
          <Button type="button" className="btn btn-primary w-100" disabled>
            Registering...
          </Button>
        ) : state.setPassword.length > 7 &&
          state.setPassword === state.confirmPassword &&
          err.personalOk &&
           err.mailingOk &&
          err.emergencyOk &&
          err.workOk &&
          err.empHistoryOk&&
          profileUrl &&
          documentUrl ? (
            <Button variant="contained " color="primary"  style={{  
              backgroundColor: "#21b6ae",
              fontSize: "18px",
            width:"797px"}}>Register</Button>
        ) : (
          <Button variant="contained " color="primary"  style={{  
            backgroundColor: "#21b6ae",
            fontSize: "18px",
          width:"797px"}}>Register</Button>
        )} */}


        <br /> <br />
        { err.generailOk&&
       err.contactOk 
        ? (
          ""
        ) : (
          <label>
            Some of the fields are missing in the following sections--{" "}
          </label>
        )}
        <br />
        {err.generailOk ? "" : <Button style={{backgroundColor:"red",height:"30px"}}>General Information</Button>} {" "}
        {err.contactOk ? "" : <Button style={{backgroundColor:"red",height:"30px"}}>Contact Details</Button>}
       
      </Form>
      </Paper> 
      </div>
      // </Element>
  
    )
}

export default RegistrationForm