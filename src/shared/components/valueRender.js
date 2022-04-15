import React from "react"
import {
  MobileNumberFormatter,
  NumberFormatCustom,
} from "../../shared/customNumberFormats"
// import DateFnsUtils from "@date-io/date-fns"
import validate from "../validation"
import { Typography } from "@material-ui/core"
import MetaInfo from "../getMetaInfo"

export const DateType = ({ value }) => {
  return (
    <Typography>
      {validate.dateFormatter(value)}
    </Typography>
  )
}

export const TextType = ({ value = "" }) => {
  // const metainfo = new MetaInfo()
  return (
    <Typography>
      {value}
    </Typography>
  )
}

export const FileType = ({ value = "" }) => {
  if (value.length)
    return (
      <a target="_blank" href={value} >
        Link
      </a>
    )
  return "--"
}

export default function CustomField(details) {
  switch (details.type) {
    case "text":
      return <TextType {...details} />

    case "name":
      return <TextType {...details} />

    case "phone":
      return <TextType {...details} />

    case "email":
      return <TextType {...details} />

    case "number":
      return <TextType {...details} />

    case "select":
      return <TextType {...details} />

    case "checkbox":
      return typeof details.value === "boolean" ? (details.value ? "Yes" : "No") : ""

    case "date":
      return <DateType {...details} />

    case "address":
      return <TextType {...details} />

    case "alphanum":
      return <TextType {...details} />

    case "file":
      return <FileType {...details} />

    case "fromdate":
      return <DateType {...details} />

    case "todate":
      return <DateType {...details} />

    case "country":
      return <TextType {...details} />

    case "state":
      return <TextType {...details} />

    default:
      return <TextType {...details} />
  }
}