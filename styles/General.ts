import { createGlobalStyle } from "styled-components";

export const General = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    * {
        &:disabled {
            background-color: gray !important;
            cursor: not-allowed;
        }
    }

    body {
        line-height: 1.5;
        font-family: var(--font-gen);
        color: var(--white-1);
        background-color: var(--secondary);
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }

    button {
        outline: none;
        background-color: transparent;
        border: 0.1rem solid transparent;
    }

    a,
    button {
        cursor: pointer;
        transition: opacity 0.3s linear;

        &:hover {
            opacity: 0.7;
        }
    }

    ul {
        list-style: none;
    }

    input[type='number'] {
        -moz-appearance: textfield !important;
        appearance: textfield !important;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
    }
`;
