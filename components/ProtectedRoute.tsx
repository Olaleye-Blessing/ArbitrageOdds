import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

type withAuthenticatedUser = (Component: FC) => FC;

const ProtectedRoute: withAuthenticatedUser = (Component) => {
    const Authenticated: FC = (): JSX.Element | null => {
        const { authenticating, user } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (authenticating) return;

            if (!user) router.replace(`/login?redirect=${router.pathname}`);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [authenticating, user]);

        if (authenticating) return <div>Authenticating.....</div>;

        return user ? <Component /> : null;
    };

    return Authenticated;
};

export default ProtectedRoute;
