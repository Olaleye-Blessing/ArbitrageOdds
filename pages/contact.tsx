import Head from "next/head";
import { FC } from "react";
import { StyledContact } from "../components/Styles/Pages/Contact";

const contact: FC = () => {
    return (
        <>
            <Head>
                <title>Contact | Arbitrageodds</title>
            </Head>
            <StyledContact className="container">
                <h1>Contact Page</h1>
            </StyledContact>
        </>
    );
};

export default contact;
