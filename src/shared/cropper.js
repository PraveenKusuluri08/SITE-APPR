import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Slide from "@material-ui/core/Slide"
import CloseIcon from "@material-ui/icons/Close"
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"
import Paper from "@material-ui/core/Paper"
import { FaPen } from "react-icons/fa"
import ReactCrop from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "linear-gradient(45deg, #280071 10%, #c42053 90%)",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  layout: {
    width: "100%",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  new: {
    backgroundColor: "black",
    color: "white",
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function Cropper(props) {
  const { handleChange, useremail, name } = props

  const classes1 = useStyles()

  const [crops, setCrop] = useState({
    unit: "%",
    width: 30,
    aspect: 9 / 9,
  })

  const [open, setOpen] = React.useState(false)

  const [filename, setFileName] = React.useState("")

  const [fileType, setFileType] = React.useState("")

  const [src, setSrc] = React.useState(null)

  const [imageRef, setImageRef] = React.useState(null)

  const [croppedImageUrl, setcroppedImageUrl] = React.useState(null)

  const blobToFile = (dataurl, filename) => {
    let url = dataurl.split(","),
      type = url[0].match(/:(.*?);/)[1],
      string = atob(url[1]),
      n = string.length,
      u8arr = new Uint8Array(n)

    while (n--) {
      u8arr[n] = string.charCodeAt(n)
    }
    let croppedImage = new File([u8arr], filename, { type: type })
    setcroppedImageUrl(croppedImage)
  }

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement("canvas")
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    canvas.width = crop.width
    canvas.height = crop.height
    const ctx = canvas.getContext("2d")

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    )

    const reader = new FileReader()
    canvas.toBlob((blob) => {
      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        blobToFile(reader.result, filename)
      }
    })
  }

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener("load", () => setSrc(reader.result))
      reader.readAsDataURL(e.target.files[0])
      let image = e.target.files[0]
      setFileType(image.type)
      setFileName(image.name)
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSrc(null)
    setImageRef(null)
  }

  const onImageLoaded = (image) => {
    setImageRef(image)
  }

  const onCropComplete = (crop) => {
    if (imageRef && crops.width && crops.height) {
      const croppedImageUrl = getCroppedImg(imageRef, crops)
      setcroppedImageUrl(croppedImageUrl)
    }
  }

  const onCropChange = (crop, percentCrop) => {
    setCrop(crop)
  }

  const handleSave = () => {
    handleChange(croppedImageUrl, useremail)
    handleClose()
  }

  return (
    <div className="App">
      <Tooltip title="Upload New Image" aria-label="excel_tooltip">
        <IconButton size="small" onClick={handleClickOpen} aria-label="new">
          <FaPen />
        </IconButton>
      </Tooltip>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes1.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main className={classes1.layout}>
          <Paper className={classes1.paper}>
            <Typography component="h1" variant="h4" align="center">
              {name}
            </Typography>
            <div>
              <input
                type="file"
                accept="image/*"
                align="center"
                onChange={onSelectFile}
              />
            </div>
            {src && (
              <div>
                <ReactCrop
                  src={src}
                  crop={crops}
                  ruleOfThirds
                  maxWidth={300}
                  circularCrop
                  onImageLoaded={onImageLoaded}
                  onComplete={onCropComplete}
                  onChange={onCropChange}
                />
                {/* {croppedImageUrl && (
                                    <img alt="Crop" height="auto" src={croppedImageUrl} />
                                )} */}
                <Button
                  onClick={handleSave}
                  variant="contained"
                  color="primary"
                >
                  save
                </Button>
              </div>
            )}
          </Paper>
        </main>
      </Dialog>
    </div>
  )
}

export default Cropper
