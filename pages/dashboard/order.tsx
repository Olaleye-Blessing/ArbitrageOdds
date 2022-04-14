import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

import AuthenticatedContainer from "../../components/Authenticated/AuthenticatedContainer";
import ProtectedRoute from "../../components/ProtectedRoute";
import { StyledDepositPage } from "../../components/Styles/Pages/Deposit";
import DepositOrder from "../../modules/Order/DepositOrder";
import Header from "../../modules/Order/Header";
import WithdrawOrder from "../../modules/Order/WithdrawOrder";

export type Order = null | "withdraw" | "deposit";

const Deposit: NextPage = () => {
    const { query, push } = useRouter();
    const [order, setOrder] = useState<Order>(null);

    const handleChangeOrder = (order: Order) => {
        // setOrder(order);

        push(`/dashboard/order?type=${order}`);
    };

    useEffect(() => {
        const { type } = query;
        setOrder(type as Order);
    }, [query]);

    console.log({ order });

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
