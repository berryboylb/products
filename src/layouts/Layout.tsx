import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const layouts = ({ children} : any) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default layouts