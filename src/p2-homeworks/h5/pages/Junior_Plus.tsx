import React from 'react';
import {NavLink} from "react-router-dom";
import HW12 from "../../h12/HW12";

const Junior_Plus = () => {
    return (
        <div>
            <NavLink to={'/junior_plus'}>Junior+</NavLink>
            <HW12/>
        </div>
    );
};

export default Junior_Plus;