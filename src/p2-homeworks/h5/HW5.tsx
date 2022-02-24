import React from 'react'
import {BrowserRouter, Route, Routes, Navigate, NavLink} from "react-router-dom";
import Junior from "./pages/Junior";
import PreJunior from "./pages/PreJunior";
import Junior_Plus from "./pages/Junior_Plus";
import Error404 from "./pages/Error404";


function HW5() {
    return (
        <BrowserRouter>
            <div>
                        <Routes><Route path="/dz" element={<Navigate to="/prejunior" />}/></Routes>
                        <Routes><Route path="/prejunior" element={<PreJunior/>} /></Routes>
                        <Routes><Route path="/junior" element={<Junior/>} /></Routes>
                        <Routes><Route path="/junior_plus" element={<Junior_Plus/>} /></Routes>
                        <Routes><Route path="/404" element={<Error404/>} /></Routes>
            </div>
        </BrowserRouter>
    )
}

export default HW5
