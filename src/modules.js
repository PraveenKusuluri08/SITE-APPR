import React from "react";
import {
  FaTasks,
} from "react-icons/fa";
import { IoMdAlarm, } from "react-icons/io";
import { GoMailRead } from 'react-icons/go'
import { ImProfile } from 'react-icons/im'
import { AiOutlineForm } from 'react-icons/ai'
const modules = [
  {
    text: "Employee Management",
    icon: <FaTasks size={18} />,
    link: "/employee/management",
    moduleName: "Employee Management",
  },
  {
    text: "Profile Builder",
    icon: <ImProfile size={18} />,
    link: "/profilebuilder",
    moduleName: "profile builder",
  },
  {
    text: "Employee Invitation",
    icon: <GoMailRead size={18} />,
    link: '/employeeinvitation',
    moduleName: 'Employee invitation'
  },
  {
    text: "Form Builder",
    icon: <AiOutlineForm size={18} />,
    link: '/formbuilder',
    moduleName: 'Form Builder'
  },
  {
    text: "History",
    icon: <IoMdAlarm size={18} />,
    link: '/history',
    moduleName: 'History'
  },
]

export default modules;