import { NextPage } from "next";
import { StyledLoginPage } from "../components/Styles/Pages/StyledLogInPage";
import Form from "../modules/LogIn/Form";
import Slider from "../modules/Auth/Slider";

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
