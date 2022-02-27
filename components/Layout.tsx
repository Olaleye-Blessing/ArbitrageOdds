import React, { FC } from "react";
import Navbar from "./Navbar/Index";

const Layout: FC = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;
