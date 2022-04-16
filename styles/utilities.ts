import { createGlobalStyle } from "styled-components";

export const Utilities = createGlobalStyle`
    .homeLogo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--white);

        figure {
            margin-right: 0.5rem;
            color: var(--black-1);
        }

        span {
            display: inline-block;
            margin-top: -0.5rem;
            font-size: clamp(1.5rem, calc(1.5rem + 0.5vw), 2rem);
            font-weight: 500;
            padding-left: 0.3rem;
        }
    }

    .container {
        width: 100%;
        max-width: 120rem;
        margin-right: auto;
        margin-left: auto;
    }

    .form {
        &__control {
            margin-top: 2rem;
            margin-bottom: 2rem;
            max-width: 73.5rem;


            &-flex {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-bottom: 0;
                column-gap: 2rem;

                & > * {
                    flex: 1 1 20rem;
                    margin-bottom: 2rem;
                }
            }
        }

        &__input {
            &--error {
                color: brown;
                font-size: 1.5rem;
                padding-left: 0.2rem;
                display: block;
            }
        }

        &__submit {
            margin-top: 3rem;
            display: block;
            padding: 1rem 1.5rem 1.2rem;
            border-radius: 0.5rem;
            background-color: var(--primary);
            color: var(--white);
            margin-right: 2rem;
            margin-left: auto;
        }
    }

    .underline {
        text-decoration: underline;
    }

    .btn {
        display: inline-block;
        padding: 1rem;
        border-radius: 1rem;
        transition: all 0.2s ease-in;
    }

    .danger {
        color: brown;
    }
`;
