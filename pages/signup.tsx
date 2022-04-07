import { NextPage } from "next";
import Head from "next/head";

import { StyledSignUpPage } from "../components/Styles/StyledSignUpPage";
import Slider from "../modules/Auth/Slider";
import Form from "../modules/Signup/Form";

const SignUp: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sign Up | Arbitrageodds</title>
            </Head>
            <StyledSignUpPage className="container">
                <Form />
                <Slider />
            </StyledSignUpPage>
        </>
    );
};

export default SignUp;
