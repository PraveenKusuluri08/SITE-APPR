import React from "react";
import {
  FaTasks,
} from "react-icons/fa";
import { IoMdAlarm, } from "react-icons/io";
import { GoMailRead } from 'react-icons/go'
import { ImProfile } from 'react-icons/im'
import { AiOutlineForm } from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
// import {GrUserManager} from 'react-icons/Gr'

const modules = [
  {
    text:"Profile",
    icon:<AiOutlineUser size={18} />,
    link:"/profile",
    moduleName:"profile"

  },
  {
    text: "Employee Management",
    icon: <GoMailRead size={18} />,
    link: "/employeemanagement",
    moduleName: "employee-management",
  },
  {
    text: "Employee Invitation",
    icon: <GoMailRead size={18} />,
    link: '/employeeinvitation',
    moduleName: 'employee-invitation'
  },
  {
    text: "Form Builder",
    icon: <AiOutlineForm size={18} />,
    link: '/formbuilder',
    moduleName: 'form-builder'
  },
  {
    text:"FormA",
    icon:<AiOutlineForm size={18}/>,
    link:"/formbuilder/formA",
    moduleName:"FormA"
  },
  {
    text:"FormB",
    icon:<AiOutlineForm size={18}/>,
    link:"/formbuilder/formB",
    moduleName:"FormB"
  }
  , {
    text: "History",
    icon: <IoMdAlarm size={18} />,
    link: '/history',
    moduleName: 'history'
  }
]

export default modules;
