import React from "react";
import AuthenticatedContainer from "../../components/Authenticated/AuthenticatedContainer";

const statistics = () => {
    return (
        <>
            <AuthenticatedContainer>
                <p>dynamic statistics</p>
            </AuthenticatedContainer>
        </>
    );
};

export default statistics;
