import axios, { AxiosError } from "axios";
import { Values } from "../modules/LogIn/Form";
import { base_url, routes } from "../services";
import { SignUpDetails, SuccessResponse } from "../typescript/interface";
import { AuthUser, LoginError } from "../typescript/types";

interface Auth {
    authenticated: boolean;
    token: string;
    user: AuthUser;
}

export const login = async (
    values: Values,
    setUser: (value: any) => void,
    setAuthTokens: (value: any) => void
) => {
    try {
        let {
            data: { data },
        } = await axios.post<SuccessResponse<Auth>>(
            `${base_url}${routes.LOG_IN}`,
            values
        );

        const { token, user } = data;
        setUser(user);
        setAuthTokens(token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("authToken", token);
    } catch (error) {
        let errorMessage = "";

        if (axios.isAxiosError(error)) {
            let errRes = (error.response?.data as LoginError).message;

            errorMessage = errRes;
        } else {
            errorMessage = "Unknown error! Please try again later";
        }

        throw new Error(errorMessage);
    }
};

export const signup = async (values: SignUpDetails) => {
    try {
        let body = {
            firstname: values.firstName,
            lastname: values.lastName,
            email: values.email,
            password: values.password,
        };

        await axios.post(`${base_url}${routes.SIGN_UP}`, body);
    } catch (error) {
        let errorMessage = "";

        if (axios.isAxiosError(error)) {
            let errRes = (error.response?.data as LoginError).message;

            errorMessage = errRes;
        } else {
            errorMessage = "Unknown error! Please try again later";
        }

        throw new Error(errorMessage);
    }
};
