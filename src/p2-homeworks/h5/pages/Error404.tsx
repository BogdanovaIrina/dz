import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Error404.module.css'

function Error404() {
    return (
        <div>
            <NavLink to={'/404'}>Error 404</NavLink>
            <p className={s.zoomArea}><b>OOOPS!</b> не пашет</p>
            <section className={s.error}>
                <span>4</span>
                <span><span className={s.screen}>0</span></span>
                <span>4</span>
            </section>
        </div>
    )
}

export default Error404
