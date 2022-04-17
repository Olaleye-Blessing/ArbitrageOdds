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
    caret-color: var(--white);
    transition: all 0.2s linear;

    &::placeholder {
        color: var(--white-2);
    }

    &:hover {
        opacity: 0.85;
    }
`;

export const StyledInputFile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;

        &:focus {
            & + label {
                outline: 0.1rem dotted #000;
                outline: -webkit-focus-ring-color auto 0.5rem;
            }
        }
    }

    input:focus + label,
    label:hover {
        opacity: 0.7;
    }

    label {
        font-size: 1.8rem;
        font-weight: 500;
        color: white;
        transition: all 0.3s linear;
        display: inline-block;
        cursor: pointer;
        padding: 1rem;
        background: #e8edeb;
        color: black;
        border-radius: 1rem;

        & * {
            pointer-events: none;
        }
    }

    output {
        margin-top: 3rem;
        display: block;
        width: 100%;
        border-radius: 1rem;
        transition: all 0.3s linear;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 0;
        transition: all 0.3s linear;
        background-color: brown;

        &.show {
            height: 100%;
            max-width: 40rem;
            max-height: 30rem;
        }

        figure {
            border-radius: 1rem;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }
`;
