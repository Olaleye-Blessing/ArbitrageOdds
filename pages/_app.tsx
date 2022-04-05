import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Notifications from "../components/Notifications/Index";
import { AuthProvider } from "../context/AuthContext";
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
            <Notifications />
            <AuthProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AuthProvider>
        </>
    );
}

export default MyApp;
