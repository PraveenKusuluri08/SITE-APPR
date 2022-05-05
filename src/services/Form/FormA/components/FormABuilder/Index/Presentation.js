import React from "react";
import Section from "../Section";
import { Paper, Grid, Button } from "@material-ui/core";
import AddSection from "../BuilderComponents/AddSection";


function Presentation(props) {

  const { state, onSave } = props;

  const formATemplate = state.formATemplate;
  // if (profileTemplate.isLoading)
  //   return "Loading"
  // else if (profileTemplate.error !== "")
  //   return "Failed to load"
  console.log("PRESENTATION-STATE", state);
  // console.log("FORMTEMPLATE", Object.values(formATemplate.data.sections) === undefined, Object.values(formATemplate.data.sections) === null)
  return (
    <div>
      <Paper className="p-2">
        <Grid container spacing={1}>

           {/* {formATemplate !== undefined &&formATemplate !== null&&
          formATemplate.data !== undefined &&
          formATemplate.data !== null
            ? Object.values(formATemplate.data.sections)
                .sort((a, b) => a.sortPriority - b.sortPriority)
                .map((section) => {
                  return <Section sectionKey={section.access_key} />;
                })
            : null}  */}    

          {/* <Section/> */}
          <Grid item>
            <div className="text-center d-flex justify-content-between w-100">
              <div />
              <div
                className="d-flex"
                style={{ display: "flex", marginLeft: "600px" }}
              >
                <AddSection />
                &nbsp;&nbsp;
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onSave}
                  disabled={state.formATemplate.isUpdating}
                >
                  Save Changes
                </Button>
              </div>
              <div />
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Presentation;
