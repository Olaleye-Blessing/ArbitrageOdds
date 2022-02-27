import { Form, Formik, FormikHelpers, useFormik } from "formik";
import { NextPage } from "next";
import { StyledSignUpPage } from "../components/Styles/StyledSignUpPage";
import Input from "./../components/Input/Index";
import * as Yup from "yup";

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    pasword: string;
    confirmPassword: string;
    checked: boolean;
}

const SignUp: NextPage = () => {
    // const formik = useFormik({
    //     initialValues: {
    //         firstName: "",
    //         lastName: "",
    //         email: "",
    //         pasword: "",
    //         confirmPassword: "",
    //         checked: false,
    //     },

    //     onSubmit: (values) => {
    //         alert(JSON.stringify(values, null, 2));
    //     },
    // });
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            pasword: "",
            confirmPassword: "",
            checked: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <StyledSignUpPage>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form__control form__control-flex">
                        <Input
                            type={"text"}
                            id="firstName"
                            aria-label="First Name"
                            placeholder="Enter your first name here"
                            {...formik.getFieldProps("firstName")}
                        />
                        <Input
                            type={"text"}
                            id="lastName"
                            aria-label="First Name"
                            placeholder="Enter your first name here"
                            {...formik.getFieldProps("lastName")}
                        />
                    </div>
                    <div className="form__control">
                        <Input
                            type={"email"}
                            id="email"
                            aria-label="Email"
                            placeholder="Enter your email here"
                            {...formik.getFieldProps("email")}
                        />
                    </div>

                    <div className="form__control">
                        <Input
                            type="password"
                            id="password"
                            aria-label="Password"
                            placeholder="Enter your password here"
                            {...formik.getFieldProps("password")}
                        />
                    </div>
                    <div className="form__control">
                        <Input
                            type="password"
                            id="confrimPassword"
                            placeholder="Confirm Password"
                            aria-label="Confrim Password"
                            {...formik.getFieldProps("confirmPassword")}
                        />
                    </div>

                    <label>
                        <input
                            type="checkbox"
                            id="checked"
                            aria-label="Accept terms and conditions"
                            {...formik.getFieldProps("checked")}
                        />{" "}
                        I accept the terms of use & privacy conditions.
                    </label>
                    <button type="submit" className="form__submit">
                        Sign Up
                    </button>
                </form>
                {/* <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        pasword: "",
                        confirmPassword: "",
                        checked: false,
                    }}
                    onSubmit={(
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                    ) => {}}
                >
                    <Form>
                        <div className="form__control form__control-flex">
                            <Input
                                type={"text"}
                                name="firstName"
                                id="firstName"
                                value={""}
                                onChange={() => {}}
                                aria-label="First Name"
                                placeholder="Enter your first name here"
                            />
                            <Input
                                type={"text"}
                                name="firstName"
                                id="firstName"
                                value={""}
                                onChange={() => {}}
                                aria-label="First Name"
                                placeholder="Enter your first name here"
                            />
                        </div>
                        <div className="form__control">
                            <Input
                                type={"text"}
                                name="firstName"
                                id="firstName"
                                value={""}
                                onChange={() => {}}
                                aria-label="First Name"
                                placeholder="Enter your first name here"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Last name"
                                aria-label="Last Name"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your E-mail here"
                                aria-label="Email"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Enter your password here"
                                aria-label="Password"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Confirm your password here"
                                aria-label="Confirm password"
                            />
                        </div>
                        <p>I accept the terms of use & privacy conditions.</p>
                        <button type="submit">Sign Up</button>
                    </Form>
                </Formik> */}
                {/* <form action="">
                    <div className="form__control form__control-flex">
                        <Input
                            type={"text"}
                            name="firstName"
                            id="firstName"
                            value={""}
                            onChange={() => {}}
                            aria-label="First Name"
                            placeholder="Enter your first name here"
                        />
                        <Input
                            type={"text"}
                            name="firstName"
                            id="firstName"
                            value={""}
                            onChange={() => {}}
                            aria-label="First Name"
                            placeholder="Enter your first name here"
                        />
                    </div>
                    <div className="form__control">
                        <Input
                            type={"text"}
                            name="firstName"
                            id="firstName"
                            value={""}
                            onChange={() => {}}
                            aria-label="First Name"
                            placeholder="Enter your first name here"
                        />
                    </div>

                    <div>
                        <input type="text" placeholder="Last name" aria-label="Last Name"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your E-mail here" aria-label="Email"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Enter your password here" aria-label="Password"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Confirm your password here" aria-label="Confirm password"/>
                    </div>
                    <p>I accept the terms of use & privacy conditions.</p>
                    <button type="submit">Sign Up</button>
                </form> */}
            </StyledSignUpPage>
        </>
    );
};

export default SignUp;
