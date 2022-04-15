import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
// import { DataContext } from "../../../contexts/data"
import { FaPen } from "react-icons/fa"
import CircularProgress from "@material-ui/core/CircularProgress"
import Divider from "@material-ui/core/Divider"
import CardMedia from "@material-ui/core/CardMedia"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
import CallOutlinedIcon from "@material-ui/icons/CallOutlined"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import AvatarCrop from "../../../../shared/cropper"
import useStyles from "../../styles/idCard"

export default function Presentation(props) {
  // let profile = {}
  const { handleChange, progress, individual, id, profile } = props
  const classes = useStyles()
  // const [state] = useContext(DataContext)
  // if (individual) {
  //   profile = state.employee_collection
  // } else {
  //   profile = state.employees_collection.filter(
  //     (user) => user.useremail === id
  //   )[0]
  // }

  const cardStyles = useStyles()
  console.log(profile)
  return (
    <Card className={cardStyles.root}>
      <CardMedia
        className={cardStyles.cardMediaCss}
        // image={profile.imageURL}
      >
        <Avatar
          // alt={profile.personal.firstname}
          className={cardStyles.avatar}
          // src={profile.imageURL}
        />
        <div className={classes.editoption}>
          {progress ? (
            <p>
              <CircularProgress />
            </p>
          ) : (
            // <Button
            //   variant="outline"
            //   component="label"
            // >
            // <FaPen  style={{ color: "#fff"}}/>
            //   <input
            //   onChange={(e)=>handleChange(e,profile.useremail)}
            //     type="file"
            //     style={{ display: "none" }}
            //   />
            // </Button>
            <AvatarCrop handleChange={handleChange} useremail={profile.email} />
          )}
        </div>
{/* 
        <div>
          {profile.personal.firstname +
            " " +
            profile.personal.middlename +
            " " +
            profile.personal.lastname}
          <br />
          {profile.uid}
        </div> */}
      </CardMedia>
      <CardContent>
        <h2>Contact Information</h2>
        <Divider variant="middle" />
        <div className={cardStyles.details}>
          <EmailOutlinedIcon /> {"   " + profile.email}
        </div>

        <div className={cardStyles.details}>
          {/* <CallOutlinedIcon /> {"   " + profile.personal.phonenumber} */}
        </div>

        {/* <div className={cardStyles.details}>
          <HomeOutlinedIcon />{" "}
          {"   " +
            profile.mailingaddress.line1 +
            ", " +
            (profile.mailingaddress.line2
              ? profile.mailingaddress.line2 + ", "
              : "") +
            profile.mailingaddress.city +
            ", " +
            profile.mailingaddress.state +
            ", " +
            profile.mailingaddress.country +
            " - " +
            profile.mailingaddress.zip}
        </div> */}
      </CardContent>
    </Card>
  )
}
