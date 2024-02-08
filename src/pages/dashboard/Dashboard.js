import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import Footer from "../../components/footer/Footer";
import Body from "./Body";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default Dashboard;
