import { NextPage } from "next";

import { StyledSignUpPage } from "../components/Styles/StyledSignUpPage";
import Slider from "../modules/Auth/Slider";
import Form from "../modules/Signup/Form";

const SignUp: NextPage = () => {
    return (
        <>
            <StyledSignUpPage className="container">
                <Form />
                <Slider />
            </StyledSignUpPage>
        </>
    );
};

export default SignUp;
