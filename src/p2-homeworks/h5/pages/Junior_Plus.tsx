import React from 'react';
import {NavLink} from "react-router-dom";
import HW12 from "../../h12/HW12";
import {HW13} from "../../h13/HW13";

const Junior_Plus = () => {
    return (
        <div>
            <NavLink to={'/junior_plus'}>Junior+</NavLink>
            <HW12/>
            <HW13/>
        </div>
    );
};

export default Junior_Plus;