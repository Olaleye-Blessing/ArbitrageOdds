import { useFormik } from "formik";
import { NextPage } from "next";
import { StyledSignUpPage } from "../components/Styles/StyledSignUpPage";
import Input from "./../components/Input/Index";
import * as Yup from "yup";
import { base_url, routes } from "../services";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { SignUpDetails } from "../typescript/interface";
import { signup } from "../utils/auth";

type ShowError = (field: keyof SignUpDetails, returnSpan?: boolean) => {};

const SignUp: NextPage = () => {
    const { push } = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const formik = useFormik<SignUpDetails>({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptedTerms: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("First name is required"),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Last Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string()
                .required("Password cannot be empty")
                .min(3, "Password is too short")
                .max(15, "Password is too long"),
            confirmPassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords must match"
            ),
            acceptedTerms: Yup.boolean()
                .required("Required")
                .oneOf([true], "You must accept the terms and conditions."),
        }),
        onSubmit: async (values) => {
            setSubmitting(true);

            try {
                await signup(values);
                toast.success("Account created successfully.");
                push("/login");
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
        <>
            <StyledSignUpPage>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__control form__control-flex">
                        <div className="form__control">
                            <Input
                                type={"text"}
                                id="firstName"
                                aria-label="First Name"
                                placeholder="Enter your first name here"
                                {...formik.getFieldProps("firstName")}
                            />
                            {showError("firstName")}
                        </div>
                        <div className="form__control">
                            <Input
                                type={"text"}
                                id="lastName"
                                aria-label="First Name"
                                placeholder="Enter your first name here"
                                {...formik.getFieldProps("lastName")}
                            />
                            {showError("lastName")}
                        </div>
                    </div>
                    <div className="form__control">
                        <Input
                            type={"email"}
                            id="email"
                            aria-label="Email"
                            placeholder="Enter your email here"
                            {...formik.getFieldProps("email")}
                        />
                        {showError("email")}
                    </div>

                    <div className="form__control">
                        <Input
                            type="password"
                            id="password"
                            aria-label="Password"
                            placeholder="Enter your password here"
                            {...formik.getFieldProps("password")}
                        />
                        {showError("password")}
                    </div>
                    <div className="form__control">
                        <Input
                            type="password"
                            id="confrimPassword"
                            placeholder="Confirm Password"
                            aria-label="Confrim Password"
                            {...formik.getFieldProps("confirmPassword")}
                        />
                        {showError("confirmPassword")}
                    </div>

                    <div className="form__control">
                        <label>
                            <input
                                type="checkbox"
                                id="checked"
                                aria-label="Accept terms and conditions"
                                {...formik.getFieldProps("acceptedTerms")}
                            />{" "}
                            I accept the terms of use & privacy conditions.
                        </label>
                        {showError("acceptedTerms")}
                    </div>
                    <button
                        type="submit"
                        className="form__submit"
                        disabled={submitting}
                    >
                        Sign Up
                    </button>
                </form>
            </StyledSignUpPage>
        </>
    );
};

export default SignUp;
