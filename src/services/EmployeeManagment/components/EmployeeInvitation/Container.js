import { React, useState } from 'react'
import Presentation from './Presentation'
function Container() {
    const [state, setState] = useState({
        empName: "",
        designation: "",
        department: "",
        email: '',
        dataOfJoining: "",
        areaOfSpecialization: "",
        dob: ""
    });
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };


    return (
        <div><Presentation handleChange={handleChange} state={state} /></div>
    )
}

export default Container