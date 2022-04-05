import { NextPage } from "next";
import { ChangeEventHandler, useState } from "react";
import { StyledLoginPage } from "../components/Styles/Pages/StyledLogInPage";
import Form from "../modules/LogIn/Form";
import Slider from "../modules/LogIn/Slider";

const LogIn: NextPage = () => {
    return (
        <>
            <StyledLoginPage className="container">
                <Form />
                <Slider />
            </StyledLoginPage>
        </>
    );
};

export default LogIn;
