
import React from "react"
import { Grid, Paper } from "@material-ui/core"
import { CustomField } from "../../../../../shared/formFileds"
function Presentation(props) {
	const { formData, handleChange} = props
	const handleChangeCustom = (K,V,H) => {
		handleChange(K,V,H)
	}

	return (
		<div
			style={{
				paddingTop: "30px",
				paddingBottom: "30px",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div></div>
			<Grid container spacing={2}>
				<Paper style={{ padding: "15px" }}>
					{formData.map((portion, index) => {
						const { section, fields, heading } = portion
						return (
							<div key={index}>
								<h3>
									<u>{heading}</u>
								</h3>
								<Grid container spacing={3}>
									{fields.map((item) => {
										const { label, name, required } = item
										if (item.isExist) {
                      return (
                        <Grid item xs={6}>
                          <CustomField
                            disabled={false}
                            type={item.type}
                            required={required}
                            label={label}
                            menuItems={item.values}
                            handleChange={(e) =>
                                    handleChangeCustom(
                                      name,
                                      e.target.value,
                                      section
                                    )
                            }
                            name={name}
                            value={props[section][name]}
                            section={section}
                            minDate={
                              item.type === "date" ||
                              item.type === "fromdate" ||
                              item.type === "todate"
                                ? props[section][
                                    item.type === "fromdate" ? item : "minDate"
                                  ]
                                : ""
                            }
                            maxDate={
                              item.type === "date" ||
                              item.type === "fromdate" ||
                              item.type === "todate"
                                ? props[section][
                                    item.type === "fromdate" ? item : "maxDate"
                                  ]
                                : ""
                            }
                          />
                        
                        </Grid>
                      );
                    }
										return null
									})}
								</Grid>
								<br />
								<br />
							</div>
						)
					})}
				</Paper>
			</Grid>
			<div></div>
		</div>
	)
}

export default Presentation
