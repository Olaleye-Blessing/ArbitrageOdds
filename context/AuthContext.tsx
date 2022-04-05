import { createContext, Dispatch, FC, useEffect, useState } from "react";
import { AuthUser } from "../typescript/types";

interface IAuth {
    authenticating: boolean;
    user: AuthUser | null;
    authTokens: string | null;
    setUser: Dispatch<any>;
    setAuthTokens: Dispatch<any>;
    handleAuthenticating: (val: boolean) => void;
}

export const AuthContext = createContext<IAuth | undefined>(undefined);

export const AuthProvider: FC = ({ children }) => {
    const [authenticating, setAuthenticating] = useState(true);
    const [user, setUser] = useState(null);
    const [authTokens, setAuthTokens] = useState<IAuth["authTokens"]>(null);

    const handleAuthenticating = (val: boolean) => {
        setAuthenticating(val);
    };

    useEffect(() => {
        let localAuthTokens = localStorage.getItem("authToken");
        let localUser = localStorage.getItem("user");

        if (localAuthTokens) {
            let authToken = localAuthTokens,
                user = JSON.parse(localUser!);
            console.log({ authToken, user });

            // setAuthTokens(authToken);
            // setUser(jwtDecode(authToken.access));
        } else {
            setAuthTokens(null);
            setUser(null);
        }

        setAuthenticating(false);
    }, []);

    const logout = () => {
        localStorage.removeItem("authTokens");
        setAuthTokens(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                authenticating,
                handleAuthenticating,
                user,
                authTokens,
                setUser,
                setAuthTokens,
                // logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
