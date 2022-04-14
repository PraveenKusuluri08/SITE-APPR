import React from "react"
import { Header, Card } from "semantic-ui-react"
import { Link } from "react-router-dom"
import {
  FaHistory,
  FaCalendarAlt,
  FaTasks,
  FaEdit,
  FaUsers,
  FaFileAlt,
  FaFileSignature,
  FaMap,
} from "react-icons/fa"
import { IoMdChatboxes, IoIosArrowDropdown, IoIosDocument, IoIosMailUnread } from "react-icons/io"
import { RiGroup2Line } from "react-icons/ri"
import { MdViewModule } from "react-icons/md"
import { Business } from "@material-ui/icons"
import { TiDocumentText, TiUserAdd } from "react-icons/ti"
import { FcEngineering } from "react-icons/fc"


function Presentation() {
  const CustomCard = ({ title, service }) => {
    return (
      <React.Fragment>
        <Header>{title}:</Header>
        <hr />
        <Card.Group itemsPerRow={4} className="ml-4 mt-1">
          {service.map((item) => {
            return (
              <span className="m-1">
                <Link className="m-1" style={{ color: "grey" }} to={item.linkTo}>
                  <Card className="w-100 p-4" color={item.color} image={item.icon} />
                </Link>
                <br />
                <span className="font-10">{item.text}</span>
              </span>
            )
          })}
        </Card.Group>
      </React.Fragment>
    )
  }

  return (
    <div className="ml-3 mr-3 mt-3">
      <CustomCard title="Frequently used" service={frequentServices} />
      <CustomCard title="Rarely Used" service={rareServices} />
    </div>
  )
}

export default Presentation

const frequentServices = [
  {
    text: "Task management",
    icon: <FaTasks style={{ fontSize: "50px" }} />,
    linkTo: "console/projects",
    color: "blue",
  },
  {
    text: "Time sheets",
    icon: <FaCalendarAlt style={{ fontSize: "50px" }} />,
    linkTo: "/console/timesheets",
    color: "green",
  },
  {
    text: "Wiki",
    icon: <TiDocumentText style={{ fontSize: "50px" }} />,
    linkTo: "console/wiki",
    color: "red",
  },
  {
    text: "Discussions",
    icon: <IoMdChatboxes style={{ fontSize: "50px" }} />,
    linkTo: "console/discussions",
    color: "blue",
  },
  {
    text: "Invite employee",
    icon: <TiUserAdd style={{ fontSize: "50px" }} />,
    linkTo: "console/inviteemployee",
    color: "green",
  },
  {
    text: "Create template",
    icon: <FaEdit style={{ fontSize: "50px" }} />,
    linkTo: "console/createtemplate",
    color: "red",
  },
  {
    text: "Employee List",
    icon: <FaUsers style={{ fontSize: "50px" }} />,
    linkTo: "console/employees",
    color: "violet",
  },
  {
    text: "History",
    icon: <FaHistory style={{ fontSize: "50px" }} />,
    linkTo: "console/history",
    color: "blue",
  },
]
const rareServices = [
  {
    text: "Letter Templates",
    icon: <FaFileAlt style={{ fontSize: "50px" }} />,
    linkTo: "console/templates/lettertemplates",
    color: "blue",
  },
  {
    text: "Email Templates",
    icon: <IoIosMailUnread style={{ fontSize: "50px" }} />,
    linkTo: "console/templates/emailtemplates",
    color: "blue",
  },
  {
    text: "Project Templates",
    icon: <FaMap style={{ fontSize: "50px" }} />,
    linkTo: "console/templates/projecttemplates",
    color: "blue",
  },
  {
    text: "Dropdown Lists",
    icon: <IoIosArrowDropdown style={{ fontSize: "50px" }} />,
    linkTo: "console/templates/controldata",
    color: "blue",
  },
  {
    text: "Authorized Signatures",
    icon: <FaFileSignature style={{ fontSize: "50px" }} />,
    linkTo: "console/authorizedsignatures",
    color: "green",
  },
  {
    text: "Documents Templates",
    icon: <IoIosDocument style={{ fontSize: "50px" }} />,
    linkTo: "console/templates/documentstemplates",
    color: "black",
  },
  {
    text: "Company details",
    icon: <Business style={{ fontSize: "50px" }} />,
    linkTo: "console/companydetails",
    color: "blue",
  },
  {
    text: "Module access",
    icon: <MdViewModule style={{ fontSize: "50px" }} />,
    linkTo: "console/moduleaccess",
    color: "red",
  },
  {
    text: "Clients list",
    icon: <RiGroup2Line style={{ fontSize: "50px" }} />,
    linkTo: "console/clientslist",
    color: "green",
  },
  {
    text: "Profile Builder",
    icon: <FcEngineering style={{ fontSize: "50px" }} />,
    linkTo: "console/profilebuilder",
    color: "blue",
  },
]
