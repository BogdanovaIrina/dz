import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import {NavLink} from "react-router-dom";
import s from './PreJunior.module.css'
import HW6 from "../../h6/HW6";

const PreJunior = () => {
    return (
        <div>
            <ul className={s.list}>
                <li><NavLink to={'/prejunior'}>PreJunior</NavLink></li>
                <li><NavLink to={'/junior'}>Junior</NavLink></li>
                <li><NavLink to={'/junior_plus'}>Junior+</NavLink></li>
                <li><NavLink to={'/404'}>Error 404</NavLink></li>
            </ul>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            <HW6/>
        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз