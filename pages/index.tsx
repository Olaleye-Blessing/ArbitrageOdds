/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProtectedRoute from "../components/ProtectedRoute";

const Home: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace("/dashboard");
    }, []);

    return <></>;
};

export default ProtectedRoute(Home);
