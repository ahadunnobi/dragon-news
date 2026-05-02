import React from 'react';
import Navber from "@/src/componant/shared/Navber"

const Mainlayout = ({ children }) => {
    return (
        <div>
            <Navber />
            {children}
        </div>
    );
};

export default Mainlayout;