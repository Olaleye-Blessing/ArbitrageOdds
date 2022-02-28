import React from "react";
import AuthenticatedContainer from "../../components/Authenticated/AuthenticatedContainer";

const transactions = () => {
    return (
        <>
            <AuthenticatedContainer>
                <p>dynamic transactions history</p>
            </AuthenticatedContainer>
        </>
    );
};

export default transactions;
