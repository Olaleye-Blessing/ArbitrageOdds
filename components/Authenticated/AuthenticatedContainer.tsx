import React, { FC } from "react";
import AuthNavBar from "./AuthNavBar";
import { StyeldAuthContainer } from "./StyeldAuthContainer";

const AuthenticatedContainer: FC = ({ children }) => {
    return (
        <StyeldAuthContainer className="container">
            <AuthNavBar />
            {children}
        </StyeldAuthContainer>
    );
};

export default AuthenticatedContainer;
