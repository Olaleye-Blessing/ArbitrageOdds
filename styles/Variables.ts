import { createGlobalStyle } from "styled-components";

export const Variables = createGlobalStyle`
    :root {
        --primary: rgba(187, 167, 115, 0.75);
        --secondary: rgba(100, 139, 96, 1);

        --white-1: rgba(255, 255, 255, 1);
        --white-2: rgba(255, 255, 255, 0.5);

        --black-1: rgba(0, 0, 0, 1);

        --font-gen: 'Roboto', sans-serif;
        --font-pri: 'PT Sans', sans-serif;
    }
`;
