import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchCommon } from "../../redux/action/Action";

  const Layout = () => {
   const dispatch = useDispatch();  
  const getAllData = async () => {
    try {
      const res = await axios.get('http://localhost:4500/room/all');
      dispatch(fetchCommon(res.data))     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
