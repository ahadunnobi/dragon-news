import React from 'react';
import Header from "@/src/componant/shared/Header"
import Navber from "@/src/componant/shared/Navber"
import Footer from "@/src/componant/shared/Footer"

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Navber />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;