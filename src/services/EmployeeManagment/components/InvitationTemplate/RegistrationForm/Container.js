import React, { useEffect, useState } from "react"
import Prompt from "../../../../../shared/snakBars"
import { render } from "react-dom"
import { storage } from "../../../../../config/config"
import Presentation from "./Presentation"
import { employeeRegistration } from "../../../middleware/index"
import { connect } from "react-redux"
import { loadInvitedEmployeeInfo } from "../../../middleware/employeeInvitationToken"
import Validations from "../../../../../shared/validation"
function Container(props) {
    console.log(props)
    const [state, setState] = useState({
      registering: false,
      currID: "",
      veridicID: "",
      upload: false,
      isUploading: false,
      isUploading1: false,
      progress1: 0,
      progress: 0,
      passMatch1: "",
      passMatch2: "",
      password: "",
      setPassword: "",
      confirmPassword: "",
      passwordLength: 0,
      documentURL: null,
      image: null,
      file: null,
      generalInformation: {},
      contactDetails: {},
      qualifications: {},
    
    })
    const [err, setErr] = useState({
      generailOk: false,
      contactOk: false,
      qualificationOk: false,
    });
    const { empInfo, loadInvitedEmpInfo } = props
    let empInfoPayload = {
      email: props.email,
    }
    useEffect(() => {
      loadInvitedEmpInfo(empInfoPayload)
    }, [])
  
    const [profile, setProfile] = useState(null)
    const [profileUrl, setUrl] = useState(null)
    const [documentUrl, setDocUrl] = useState(null)
    
    const handleStateSet = (name, value) => {
      setState({
        ...state,
        [name]: value,
      })
      if (name === "generalInformation") {
        let generalError = 0
        Object.entries(value).forEach(([k, v]) => {
          if (k === "empName" && v === "" ) {
            generalError++
          }
        })
        if (generalError === 0)
          setErr({
            ...err,
            generailOk: true,
          })
        else
          setErr({
            ...err,
            generailOk: false,
          })
      } else if (name === "contactDetails") {
        let contactErr = 0
        Object.entries(value).forEach(([k, v]) => {
            if(k==="phonenumber" && !Validations.checkNumber(v))
            contactErr++;
        })
        if (contactErr === 3)
          setErr({
            ...err,
            contactOk: true,
          })
        else
          setErr({
            ...err,
            contactOk: false,
          })
      } 
    //   else if (name === "emergencycontact") {
    //     let qualificationError = 0
    //     Object.entries(value).forEach(([k, v]) => {
    //       if (k !== "emailid" && v === "") {
    //         emergencyError++
    //       }
    //       if(k==="phone" && !Validations.checkNumber(v))
    //       emergencyError++;
    //       if(k==="emailid"){
    //         if(v.length!==0&&!Validations.checkEmail(v)){
    //           emergencyError++
    //         }else if(Validations.checkEmail(v)&&v.length===0){
    //           emergencyError=0
    //         }
    //       }
    //     })
    //     if (qualificationError === 0)
    //       setErr({
    //         ...err,
    //         qualificationOk: true,
    //       })
    //     else
    //       setErr({
    //         ...err,
    //         qualificationOk: false,
    //       })
    //   }
    //    else if (name === "workauthorization") {
    //     let workError = 0
    //     Object.entries(value).forEach(([k, v]) => {
    //       if (v === "") {
    //         workError++
    //       }
    //       if(k==="phone" && !Validations.checkNumber(v))
    //       {
    //         workError++;
    //       }
    //     })
    //     if (workError === 0)
    //       setErr({
    //         ...err,
    //         workOk: true,
    //       })
    //     else
    //       setErr({
    //         ...err,
    //         workOk: false,
    //       })
    //   } 
    //   else if (name==="employementhistory"){
    //     let expHistoryError=0
    //     Object.entries(value).forEach(([k, v]) => {
        
    //       if(k==="vendorphone"){
    //         if(v.length!==0 &&!Validations.checkNumber(v)){
    //           expHistoryError++;
    //         }else if(Validations.checkNumber(v)&&v.length===0){
    //           expHistoryError=0
    //         }
    //       }else if(k==="vendoremail"){
    //         if(v.length!==0&&!Validations.checkEmail(v)){
    //           expHistoryError++
    //         }else if (Validations.checkEmail(v)&&v.length===0){
    //           expHistoryError=0
    //         }
    //       }
    //      console.log("objectexpHistoryError",expHistoryError)
    //     })
    //     if (expHistoryError === 0)
    //       setErr({
    //         ...err,
    //         empHistoryOk: true,
    //       })
    //     else
    //       setErr({
    //         ...err,
    //         empHistoryOk: false,
    //       })
    //   }
    }
  
    const handleChangePass = (e) => {
      setState({
        ...state,
        [e.target.id]: e.target.value,
      })
    }
    const Register = (e) => {
      e.preventDefault()
      setState({
        ...state,
        registering: true,
      })
      const { employeeRegistration } = props
      let profileData = {
        token: props.token,
        password: state.confirmPassword,
        employeeInfo: {
          imageURL: profileUrl,
          workauth: [{ ...state.workauthorization, work_doc: documentUrl }],
          employmenthistory: [state.employementhistory],
          emergencycontact: [state.emergencycontact],
          mailingaddress: state.mailingaddress,
          personal: {
            ...state.personalinformation,
            Role: "User",
            employeestatus: "Bench",
          },
          educationhistory: [],
        },
      }
      employeeRegistration(profileData, props.history)
      setState({
        ...state,
        registering: false,
      })
  
      // end of register function
    }
    const handleChange1 = (file, email) => {
      if (file) {
        const image = file
        setProfile(() => image)
        ImgUpload(file, email)
      } else {
      }
    }
  
    const ImgUpload = (image) => {
      var size = 5000000
      if (
        image.type === "image/png" ||
        image.type === "image/jpeg" ||
        image.type === "image/jpg"
      ) {
        if (image.size > size) {
          render(
            <Prompt
              open={true}
              content="Image size should be less than 5MB"
              severity="error"
            />,
            document.getElementById("notifications-box")
          )
          setState({
            ...state,
            image: null,
          })
        } else {
          const uploadTask = storage.ref(`images/${image.name}`).put(image)
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              // progrss function ....
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              )
              setState({
                ...state,
                progress,
              })
            },
            (error) => {
              // error function ....
              console.log(error)
            },
            () => {
              // complete function ....
              storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                  setUrl(url)
                  setState({
                    ...state,
                    url,
                  })
                  setState({
                    ...state,
                    upload: true,
                  })
                  setState({
                    ...state,
                    image: null,
                  })
                  setState({
                    ...state,
                    progress: 1,
                  })
                })
            }
          )
        }
      } else {
        render(
          <Prompt
            open={true}
            content="You Are Allowed To Choose (jpeg,png,jpg) Images"
            severity="error"
          />,
          document.getElementById("notifications-box")
        )
        setState({
          ...state,
          image: null,
        })
      }
    }
    const handleChange = (e) => {
      if (e.target.files[0]) {
        const image = e.target.files[0]
        setState(() => ({
          ...state,
          image,
        }))
        fileUpload1(image)
      } else {
      }
    }
  
    const fileUpload1 = (file) => {
      var size = 10000000
      if (file.size > size) {
        render(
          <Prompt
            open={true}
            content="File size should be less than 10MB"
            severity="error"
          />,
          document.getElementById("notifications-box")
        )
        setState({
          ...state,
          file: null,
        })
      } else {
        const uploadTask = storage.ref(`files/${file.name}`).put(file)
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // progrss function ....
            const progress1 = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
            setState({
              ...state,
              progress1,
            })
          },
          (error) => {
            // error function ....
            console.log(error)
          },
          () => {
            // complete function ....
            storage
              .ref("files")
              .child(file.name)
              .getDownloadURL()
              .then((url) => {
                setState({
                  ...state,
                  url,
                })
                setDocUrl(url)
                setState({
                  ...state,
                  documentURL: url,
                  upload: true,
                })
                setState({
                  ...state,
                  file: null,
                })
                setState({
                  ...state,
                  progress1: 100,
                })
              })
          }
        )
      }
    }
    if (!empInfo["invitationTokenEmpInfo"].isLoading)
      return (
        <div>s
          <Presentation
            {...props}
            state={state}
            handleChange={handleChange}
            handleChange1={handleChange1}
            handleChangePass={handleChangePass}
            handleStateSet={handleStateSet}
            profile={profile}
            profileUrl={profileUrl}
            documentUrl={documentUrl}
            err={err}
            Register={Register}
          />
        </div>
    )
    return <p>Loading..</p>
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      empInfo: state.employee.invitationToken,
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      employeeRegistration: (payload, history) => {
        dispatch(employeeRegistration(payload, history))
      },
      loadInvitedEmpInfo: (payload) => {
        dispatch(loadInvitedEmployeeInfo(payload))
      },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Container)
  