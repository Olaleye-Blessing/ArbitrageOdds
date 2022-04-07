import { NextPage } from "next";
import { StyledLoginPage } from "../components/Styles/Pages/StyledLogInPage";
import Form from "../modules/LogIn/Form";
import Slider from "../modules/Auth/Slider";
import Head from "next/head";

const LogIn: NextPage = () => {
    return (
        <>
            <Head>
                <title>Login | Arbitrageodds</title>
            </Head>
            <StyledLoginPage className="container">
                <Form />
                <Slider />
            </StyledLoginPage>
        </>
    );
};

export default LogIn;
