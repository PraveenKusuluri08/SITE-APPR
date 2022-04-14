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
    text:"Profile",
    icom:<FaTasks size={18} />,
    link:"/profile",
    moduleName:"profile"

  },
  {
    text: "Employee Management",
    icon: <FaTasks size={18} />,
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
    text: "History",
    icon: <IoMdAlarm size={18} />,
    link: '/history',
    moduleName: 'history'
  }
]

export default modules;
