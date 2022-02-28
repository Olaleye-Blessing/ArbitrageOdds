import { NextPage } from "next";
import Link from "next/link";
import React, { ChangeEventHandler, useState } from "react";
import { StyledLoginPage } from "../components/Styles/Pages/StyledLogInPage";
import Input from "./../components/Input/Index";

const LogIn: NextPage = () => {
    const [details, setDetails] = useState({
        email: "",
        password: "",
    });

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        let { name, value } = e.target;
        setDetails((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <StyledLoginPage className="container">
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
                <section className="dynamic">Dynamic Data</section>
            </StyledLoginPage>
        </>
    );
};

export default LogIn;
