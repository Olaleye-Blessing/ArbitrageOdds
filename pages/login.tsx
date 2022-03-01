import { NextPage } from "next";
import { ChangeEventHandler, useState } from "react";
import { StyledLoginPage } from "../components/Styles/Pages/StyledLogInPage";
import Form from "../modules/LogIn/Form";
import Slider from "../modules/LogIn/Slider";

const LogIn: NextPage = () => {
    const [details, setDetails] = useState({
        email: "",
        password: "",
    });

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        let { name, value } = e.target;
        setDetails((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <StyledLoginPage className="container">
                <Form details={details} handleChange={handleChange} />
                <Slider />
            </StyledLoginPage>
        </>
    );
};

export default LogIn;
