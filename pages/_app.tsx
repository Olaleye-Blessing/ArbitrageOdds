import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { General } from "../styles/General";
import { Normalize } from "../styles/Normalize";
import { Utilities } from "../styles/utilities";
import { Variables } from "../styles/Variables";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Variables />
            <Normalize />
            <General />
            <Utilities />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
