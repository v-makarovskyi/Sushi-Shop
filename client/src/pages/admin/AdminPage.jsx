import './adminpage.scss'
import { Categories } from "../../conponents/categories/Categories";
import { Footer } from "../../conponents/footer/Footer";
import { Topbar } from "../../conponents/topbar/Topbar";

import React from 'react'

export const AdminPage = () => {
    return (
        <div className='admin-container'>
            <Topbar />
            <Categories />
            <h2>ADMIN</h2>
            <Footer />
        </div>
    )
}
