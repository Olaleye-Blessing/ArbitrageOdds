import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledLoginPage = styled.main`
    margin-top: 4rem;

    form,
    .dynamic {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    form {
        max-width: 50rem;
        margin: 0 auto 5rem;

        input {
            &::placeholder {
                text-align: center;
            }
        }

        .btn {
            border-radius: 0.5rem;
            background-color: var(--primary);
            color: var(--white);
            padding: 0.7rem 5.5rem;
            margin: 4rem auto 4.7rem;
            display: block;
        }

        .forgot {
            margin-top: -1.8rem;
            text-align: right;

            a {
                color: var(--white);
            }
        }

        .signup {
            text-align: center;

            a {
                color: var(--white);
                display: inline-block;
                margin-left: 1rem;
            }
        }
    }

    @media screen and (${device.tablet}) {
        margin-top: 12rem;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        form {
            flex: 1;
        }

        section {
            flex: 1;
        }
    }
`;
