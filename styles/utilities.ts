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
    }

    .container {
        width: 100%;
        max-width: 120rem;
        margin-right: auto;
        margin-left: auto;
    }

    .form {
        &__control {
            margin-bottom: 2rem;
            max-width: 73.5rem;


            &-flex {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 2rem;
                flex-wrap: wrap;

                & > * {
                    flex: 1 1 20rem;
                }
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
    }
`;
