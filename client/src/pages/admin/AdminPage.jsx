import "./adminpage.scss";
import { Categories } from "../../conponents/categories/Categories";
import { Footer } from "../../conponents/footer/Footer";
import { Topbar } from "../../conponents/topbar/Topbar";

import React from "react";

export const AdminPage = () => {
  return (
    <div className="admin-container">
      <Topbar />
      <Categories />
      <div className="content">
        <h2>ADMINPAGE</h2>
      </div>
      <Footer />
    </div>
  );
};
