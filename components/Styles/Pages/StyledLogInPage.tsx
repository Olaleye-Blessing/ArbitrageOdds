import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledLoginPage = styled.main`
    margin-top: 4rem;
    padding-bottom: 3rem;

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

    .dynamic {
        max-width: 70rem;
        margin-right: auto;
        margin-left: auto;
    }

    .splide {
        &__track {
        }

        &__pagination {
            padding-bottom: 1rem;
        }
    }

    .roi {
        font-family: var(--font-pri);
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(187, 167, 115, 0.75);
        border-radius: 15px 0px 0px 0px;
        padding: 3rem 1rem 3rem;

        &__head {
            color: rgba(255, 255, 255, 0.6);
            font-size: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        &__p {
            color: var(--white-1);
            font-size: 2rem;
            margin-bottom: 2rem;
            font-style: italic;
        }

        &__val {
            display: inline-block;
            padding-left: 1rem;
        }
    }

    .review {
        background-color: var(--primary);
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border-radius: 1rem;
        justify-content: center;
        align-items: center;
        text-align: center;

        &__text {
            margin-bottom: 1rem;
            font-weight: bold;
            max-width: 40rem;
        }

        &__author {
            font-weight: bolder;
            color: var(--secondary);
            font-style: italic;
            font-size: 2rem;
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

    @media screen and (${device.laptop}) {
        align-items: center;

        form {
            max-width: 34rem;
        }

        .roi {
            padding-top: 5.6rem;

            &__head {
                margin-bottom: 7.7rem;
                font-size: 3rem;
            }

            &__p {
                font-size: 4rem;
                margin-bottom: 4rem;
            }

            &__val {
            }
        }
    }
`;
