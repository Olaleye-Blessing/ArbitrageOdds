import styled from "styled-components";

export const StyledInput = styled.input`
    -webkit-appearance: none;
    appearance: none;
    display: block;
    font-family: inherit;
    font-size: 100%;
    width: 100%;
    background-color: var(--primary);
    border-radius: 1rem;
    padding: 1.4rem 3.8rem 1.4rem 1.5rem;
    border: 0.1rem solid transparent;
    outline: none;
    color: var(--white);

    &::placeholder {
        color: var(--white-2);
    }
`;
