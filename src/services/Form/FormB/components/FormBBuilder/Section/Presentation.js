import React from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import { CustomField } from "../../../../../../shared/components/formFields";
import AddInputField from "../AddInputField";
import MoreOptions from "../BuilderComponents/MoreOptions";

function Presentation({
  fields,
  section,
  sectionKey,
  dummyData,
  setData,
  handleAddToInvitationTemplate,
}) {
  console.log("FIELDS", fields);
  console.log("Sections🤣", section);
  console.log("sectionKey", sectionKey);
  console.log("dummyData", dummyData);
  console.log("setData", setData);
  return (
    <Grid item xs={12}>
      <div
        className="d-flex justify-content-between"
        style={{ marginLeft: "9px", fontSize: "18px", fontWeight: "bold" ,display:"flex",justifyContent:"space-between"}}
        >
        <div>
          <h1>
            <u>{section?.sectionName}:</u>
          </h1>
        </div>
        <br/><br/>
        <div>
          <AddInputField sectionKey={sectionKey} section={section} />
        </div>
      </div>
      <Grid container spacing={1}>
        {fields.map((field) => {
          const {
            type,
            required,
            label,
            values = [],
            name,
            minDate = null,
            maxDate = null,
            country = "",
          } = field;
          return type !== "" ? (
            <Grid item xs={4}>
              <div>
                <div style={{ display: "flex", marginLeft: "12px" }}>
                  <CustomField
                    type={type}
                    required={required}
                    label={label}
                    menuItems={values}
                    handleChange={(e) => setData({ [name]: e.target.value })}
                    value={dummyData[name]}
                    minDate={dummyData[minDate]}
                    maxDate={type === "todate" ? dummyData[maxDate] : undefined}
                    country={dummyData[country]}
                  />
                  <span className="opt-suffix">
                    <MoreOptions
                      sectionKey={sectionKey}
                      fieldName={name}
                      section={section}
                      field={field}
                    />
                  </span>
                </div>
              </div>
            </Grid>
          ) : (
            <Grid item xs={4}></Grid>
          );
        })}

      </Grid>
      <br/>
      <Button
      style={{marginLeft:"12px"}}
        variant="contained"
        color="primary"
        disabled={fields.length <= 0 ? true : false}
        onClick={handleAddToInvitationTemplate}
      >
        Add To Invitation Template
      </Button>
    </Grid>
  );
}

export default Presentation;
