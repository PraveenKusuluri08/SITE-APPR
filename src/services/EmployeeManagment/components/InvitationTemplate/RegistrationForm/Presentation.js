import React from "react"
import { Icon, Label } from "semantic-ui-react"
import { Form, FormGroup, Input, Progress, Button } from "reactstrap"
import Avatar from "@material-ui/core/Avatar"
import Template from "../Template"
import AvatarCropping from "../../../../../shared/cropper"
import useStyles from "../../../styles/idCard"

function RegistrationForm(props) {
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
  } = props
  const cardStyles = useStyles()

  let EmployeeData = empInfo["invitationTokenEmpInfo"].data
  return (
    <Form
      className="widthsetter p-4 bg-light m-5 rounded shadow ml-auto mr-auto"
      onSubmit={Register}
    >
      <div className="text-center">
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
            <Avatar alt="" className={cardStyles.avatar} src={profileUrl} />
          ) : null}
        </div>
        <label class="fileContainer">
          <p>
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

      <FormGroup>
        <label for="setPassword">Set Password</label>
        <Input
          autoComplete={false}
          type="password"
          onChange={handleChangePass}
          name="password"
          id="setPassword"
          placeholder=""
        />
      </FormGroup>
      <FormGroup>
        <label for="confirmPassword">Confirm Password</label>
        <Input
          autoComplete={false}
          type="password"
          name="confirmPassword"
          onChange={handleChangePass}
          id="confirmPassword"
          placeholder=""
        />
        <br />
        {state.setPassword === state.confirmPassword &&
          state.setPassword !== "" ? (
          <Label>
            <Icon name="checkmark" color="green" />
            Passwords must match
          </Label>
        ) : (
          <Label>Passwords must match</Label>
        )}
        {state.setPassword.length < 8 ? (
          <Label>Min 8 characters needed</Label>
        ) : (
          <Label>
            <Icon name="checkmark" color="green" />
            Min 8 characters needed
          </Label>
        )}
      </FormGroup>
      <br />
    </Form>
  )
}

export default RegistrationForm