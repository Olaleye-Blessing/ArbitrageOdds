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
`;
