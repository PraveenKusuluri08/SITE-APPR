// import React, { useContext } from "react"
// import { makeStyles } from "@material-ui/core/styles"
// import Card from "@material-ui/core/Card"
// import CardContent from "@material-ui/core/CardContent"
// import Avatar from "@material-ui/core/Avatar"
// import Button from "@material-ui/core/Button"
// // import { DataContext } from "../../../contexts/data"
// import { FaPen } from "react-icons/fa"
// import CircularProgress from "@material-ui/core/CircularProgress"
// import Divider from "@material-ui/core/Divider"
// import CardMedia from "@material-ui/core/CardMedia"
// import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
// import CallOutlinedIcon from "@material-ui/icons/CallOutlined"
// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
// import AvatarCrop from "../../../../shared/cropper"
// import useStyles from "../../styles/idCard"

// export default function Presentation(props) {
//   const { handleChange, progress, individual, id, profile } = props
//   const classes = useStyles()
//   const cardStyles = useStyles()
//   console.log(profile)
//   return (
//     <Card className={cardStyles.root}>
//       <CardMedia
//         className={cardStyles.cardMediaCss}
//       // image={profile.imageURL}
//       >
//         <Avatar
//           // alt={profile.personal.firstname}
//           className={cardStyles.avatar}
//         // src={profile.imageURL}
//         />
//         <div className={classes.editoption}>
//           {progress ? (
//             <p>
//               <CircularProgress />
//             </p>
//           ) : (
//             // <Button
//             //   variant="outline"
//             //   component="label"
//             // >
//             // <FaPen  style={{ color: "#fff"}}/>
//             //   <input
//             //   onChange={(e)=>handleChange(e,profile.useremail)}
//             //     type="file"
//             //     style={{ display: "none" }}
//             //   />
//             // </Button>
//             <AvatarCrop handleChange={handleChange} useremail={profile.email} />
//           )}
//         </div>
//         {/* 
//         <div>
//           {profile.personal.firstname +
//             " " +
//             profile.personal.middlename +
//             " " +
//             profile.personal.lastname}
//           <br />
//           {profile.uid}
//         </div> */}
//       </CardMedia>
//       <CardContent>
//         <h2>Contact Information</h2>
//         <Divider variant="middle" />
//         <div className={cardStyles.details}>
//           <EmailOutlinedIcon /> {"   " + profile.email}
//         </div>

//         <div className={cardStyles.details}>
//           {/* <CallOutlinedIcon /> {"   " + profile.personal.phonenumber} */}
//         </div>

//         {/* <div className={cardStyles.details}>
//           <HomeOutlinedIcon />{" "}
//           {"   " +
//             profile.mailingaddress.line1 +
//             ", " +
//             (profile.mailingaddress.line2
//               ? profile.mailingaddress.line2 + ", "
//               : "") +
//             profile.mailingaddress.city +
//             ", " +
//             profile.mailingaddress.state +
//             ", " +
//             profile.mailingaddress.country +
//             " - " +
//             profile.mailingaddress.zip}
//         </div> */}
//       </CardContent>
//     </Card>
//   )
// }
import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import { FaPen } from "react-icons/fa"
import CircularProgress from "@material-ui/core/CircularProgress"
import Divider from "@material-ui/core/Divider"
import CardMedia from "@material-ui/core/CardMedia"
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined"
import CallOutlinedIcon from "@material-ui/icons/CallOutlined"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import AvatarCrop from "../../../../shared/cropper"
import useStyles from "../../styles/idCard"
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery'

export default function Presentation(props) {
  const { handleChange, progress, individual, id, profile } = props
  const classes = useStyles()
  const isResp = useMediaQuery("(max-width :1141px)");
  const cardStyles = useStyles()
  console.log(profile)
  return (
    <Card className={cardStyles.root}>
      {isResp ?
        <CardMedia
          className={cardStyles.cardMediaCss1}
        >
          <div className={cardStyles.left}>
            <Avatar
              //alt={profile.personal.firstname}
              className={cardStyles.avatar}
            //src={profile.imageURL}
            />
            <div className={classes.editoption}>
              {progress ? (
                <p>
                  <CircularProgress />
                </p>
              ) : (
                <AvatarCrop handleChange={handleChange} useremail={profile.email} />
              )}
            </div>
            <div className={cardStyles.content}>
              {/* {profile.personal.firstname +
                " " +
                profile.personal.middlename +
                " " +
                profile.personal.lastname}
              <br />
              {profile.uid} */}
            </div>
          </div>
          <Card>
            <div>
              <h2>Contact Information</h2>
              <hr />
              <div className={cardStyles.details}>
                <EmailOutlinedIcon /> {"   " + profile.email}
              </div>

              <div className={cardStyles.details}>
                {/* <CallOutlinedIcon /> {"   " + profile.personal.phonenumber} */}
              </div>

              <div className={cardStyles.details}>
                <HomeOutlinedIcon />{" "}
                {/* {"   " +
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
                  profile.mailingaddress.zip} */}
              </div>
            </div>
          </Card>
        </CardMedia>
        :
        <Grid>
          <CardMedia
            className={cardStyles.cardMediaCss}
          // image={profile.imageURL}
          >
            <Grid className='left'>

              <div className={cardStyles.left}>
                <Avatar
                  //alt={profile.personal.firstname}
                  className={cardStyles.avatar}
                //src={profile.imageURL}
                />
                <div className={classes.editoption}>
                  {progress ? (
                    <p>
                      <CircularProgress />
                    </p>
                  ) : (
                    <AvatarCrop handleChange={handleChange} useremail='sasi' />
                  )}
                </div>
                <div className={cardStyles.content}>
                  {/* {profile.personal.firstname +
                    " " +
                    profile.personal.middlename +
                    " " +
                    profile.personal.lastname}
                  <br />
                  {profile.uid} */}
                </div>
              </div>
            </Grid>
            <Grid className='right'>

              <Card className={classes.right}>
                <div>
                  <h2>Contact Information</h2>
                  <hr style={{ color: 'white' }} />
                  <div className={cardStyles.details}>
                    <EmailOutlinedIcon /> {"   " + profile.email}
                  </div>
                  <div className={cardStyles.details}>
                    {/* <CallOutlinedIcon /> {"   " + profile.personal.phonenumber} */}
                  </div>

                  <div className={cardStyles.details}>
                    <HomeOutlinedIcon />{" "}
                    {/* {"   " +
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
                      profile.mailingaddress.zip}*/}
                  </div>
                </div>
              </Card>
            </Grid>
          </CardMedia>
        </Grid>}
    </Card>
  )
}

