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
    }
`;
