import { FC, useState } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import toast from "react-hot-toast";

import Input from "./../../components/Input/Index";
import { login } from "../../utils/auth";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";

export interface Values {
    email: string;
    password: string;
}

type ShowError = (field: keyof Values, returnSpan?: boolean) => {};

const Form: FC = () => {
    let { push } = useRouter();
    let { setUser, setAuthTokens } = useAuth();
    const [submitting, setSubmitting] = useState(false);
    const formik = useFormik<Values>({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string()
                .required("Password cannot be empty")
                .min(3, "Password is too short")
                .max(15, "Password is too long"),
        }),
        onSubmit: async (values) => {
            setSubmitting(true);

            try {
                await login(values, setUser, setAuthTokens);
                toast.success("Successfully logged in.");

                push("/dashboard");
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message);
                }
            } finally {
                setSubmitting(false);
            }
        },
    });

    const showError: ShowError = (field, returnSpan = true) => {
        let error = formik.errors[field];
        let touched = formik.touched[field];

        if (!(touched && error)) return "";

        if (returnSpan) {
            return <span className="form__input--error">{error}</span>;
        }

        return error;
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form__control">
                <Input
                    type="text"
                    aria-label="Enter your email or username"
                    id="email"
                    placeholder="Email / Username"
                    {...formik.getFieldProps("email")}
                />
                {showError("email")}
            </div>
            <div className="form__control">
                <Input
                    type="password"
                    aria-label="Enter your email or username"
                    id="password"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                />
                {showError("password")}
            </div>
            <p className="forgot">
                <Link href="/forgotpassword">
                    <a>Forgot Password?</a>
                </Link>
            </p>
            <button className="btn" disabled={submitting}>
                Login
            </button>
            <p className="signup">
                Don&apos;t have an account?{" "}
                <Link href="/signup">
                    <a>Sign up</a>
                </Link>
            </p>
        </form>
    );
};

export default Form;
