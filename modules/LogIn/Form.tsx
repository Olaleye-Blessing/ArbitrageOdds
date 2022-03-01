import Link from "next/link";
import React, { ChangeEventHandler, FC } from "react";
import Input from "./../../components/Input/Index";

interface IForm {
    details: {
        email: string;
        password: string;
    };
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

const Form: FC<IForm> = ({ details, handleChange }) => {
    return (
        <form>
            <div className="form__control">
                <Input
                    aria-label="Enter your email or username"
                    id="email"
                    name="email"
                    value={details.email}
                    placeholder="Email / Username"
                    onChange={handleChange}
                />
            </div>
            <div className="form__control">
                <Input
                    type="password"
                    aria-label="Enter your email or username"
                    id="password"
                    name="password"
                    value={details.password}
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <p className="forgot">
                <Link href="/forgotpassword">
                    <a>Forgot Password?</a>
                </Link>
            </p>
            <button className="btn">Login</button>
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
