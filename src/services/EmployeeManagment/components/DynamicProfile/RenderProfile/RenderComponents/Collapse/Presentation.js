import React from "react";
import { Collapse, Paper, Grid, Button } from "@material-ui/core";
import { CustomField } from "../../../../../../../shared/components/formFields";

function Presentation(props) {
  const {
    sectionKey,
    state,
    setEditingData,
    onUpdate,
    componentState,
    buttonDisability,
    access_modules,
    names,
  } = props;
  const fields = sectionKey
    ? state.profileTemplate.data.sections[sectionKey].fields
    : [];
  const editingSection = state.editingSection;
  console.log(props);

  console.log("sectionKey😃", sectionKey);
  const emailDisable = sectionKey === "personal";

  const managers = [];
  if (
    access_modules.includes("employees-manager") ||
    access_modules.includes("console-customization")
  )
    Object.values(names).forEach((employee) => {
      if (
        (employee.isSupervisor && employee.status === "active") ||
        employee.designation === "admin"
      ) {
        managers.push(employee.uid);
      }
    });
  return (
    <div>
      <Collapse in={editingSection.access_key === sectionKey}>
        {editingSection.access_key === sectionKey ? (
          <div className="rounded p-2 mt-2 bg-white">
            <form onSubmit={onUpdate}>
              <Grid container spacing={1}>
                {fields
                  .filter((f) => {
                    if (f.editAccess === "manager")
                      return (
                        access_modules.includes("employees-manager") ||
                        access_modules.includes("console-customization")
                      );
                    return true;
                  })
                  .map((field) => {
                    console.log("field", field);
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
                    if (
                      sectionKey === "personal" &&
                      name === "reportingmanager"
                    ) {
                      return (
                        <Grid item xs={4}>
                          <CustomField
                            type={"autocomplete"}
                            required={required}
                            label={label}
                            menuItems={managers}
                            handleChange={(e) =>
                              setEditingData({ [name]: e.target.value })
                            }
                            value={
                              managers.includes(state.editingData[name])
                                ? state.editingData[name]
                                : ""
                            }
                            {...componentState}
                          />
                        </Grid>
                      );
                    }
                    return type !== "" ? (
                      <Grid item xs={4}>
                        <CustomField
                          type={type}
                          disabled={
                            sectionKey === "personal" && name === "emailid"
                              ? true
                              : false
                          }
                          required={required}
                          label={label}
                          menuItems={values}
                          handleChange={(e) =>
                            setEditingData({ [name]: e.target.value })
                          }
                          value={state.editingData[name]}
                          minDate={state.editingData[minDate]}
                          maxDate={
                            type === "todate"
                              ? state.editingData[maxDate]
                              : undefined
                          }
                          country={state.editingData[country]}
                          {...componentState}
                        />
                      </Grid>
                    ) : (
                      <Grid item xs={4}></Grid>
                    );
                  })}
              </Grid>
              <br />
              <div className="text-center">
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={
                    state.employeeProfile.isUpdating ||
                    (buttonDisability &&
                      state.editingSection.access_key === sectionKey)
                  }
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        ) : null}
      </Collapse>
    </div>
  );
}

export default Presentation;
