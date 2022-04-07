import { NextPage } from "next";
import Head from "next/head";
import { FC, useState } from "react";

import AuthenticatedContainer from "../../components/Authenticated/AuthenticatedContainer";
import ProtectedRoute from "../../components/ProtectedRoute";
import { StyledDepositPage } from "../../components/Styles/Pages/Deposit";
import DepositOrder from "../../modules/Deposit/DepositOrder";
import Header from "../../modules/Deposit/Header";
import WithdrawOrder from "../../modules/Deposit/WithdrawOrder";

export type Order = null | "withdraw" | "deposit";

const Deposit: NextPage = () => {
    const [order, setOrder] = useState<Order>(null);

    const handleChangeOrder = (order: Order) => {
        setOrder(order);
    };

    return (
        <>
            <Head>
                <title>Deposit | Arbitrageodds</title>
            </Head>
            <AuthenticatedContainer>
                <StyledDepositPage className="auth__main">
                    {!order ? (
                        <Header handleChangeOrder={handleChangeOrder} />
                    ) : order === "deposit" ? (
                        <DepositOrder />
                    ) : (
                        <WithdrawOrder />
                    )}
                </StyledDepositPage>
            </AuthenticatedContainer>
        </>
    );
};

export default ProtectedRoute(Deposit);
