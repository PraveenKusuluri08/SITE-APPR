import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { inviteEmployee } from '../../middleware';
import Presentation from './Presentation'
function Container() {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        empName: "",
        designation: "",
        department: "",
        email: '',
        dataOfJoining: "",
        areaOfSpecialization: "",
        dob: ""
    });

    // useEffect(() => {
    //     dispatch(inviteEmployee(state))
    // }, [])
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