import * as React from 'react';
import Button from '@material-ui/core/Button';
import {
    TextField, Card, CardContent, CardActions
} from '@material-ui/core';
function Presentation(props) {
    const { handleChange, state } = props
    return (
        <div>

            <form>
                <Card style={{ maxWidth: '550px', textAlign: 'center', margin: 'auto', padding: '30px' }} elevation="5">
                    <h1 style={{ textDecoration: 'underline' }}>Invite New Employee</h1>
                    <CardContent>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
                                <TextField type='text' id="standard-basic" value={state.first_name} label="Employee Name" variant="standard" onChange={handleChange} name="employee_name" fullWidth />

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>

                                <TextField id="standard-basic" value={state.designation} label="Designation" variant="standard" onChange={handleChange} name="designation" />
                                <TextField id="standard-basic" value={state.department} label="Department" variant="standard" sx={{ width: '200px' }} onChange={handleChange} name="department" />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px' }}>
                                <TextField id="standard-basic" label="Email Address" name="email" type='email' variant="standard" value={state.email} required fullWidth onChange={handleChange} />
                            </div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button style={{ margin: 'auto', backgroundColor: '#0170eb', color: 'white' }} variant="contained">Invite</Button>
                    </CardActions>
                </Card>
            </form>
        </div>
    )
}

export default Presentation