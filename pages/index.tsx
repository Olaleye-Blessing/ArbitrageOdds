/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, []);

    return <></>;
};

export default Home;
