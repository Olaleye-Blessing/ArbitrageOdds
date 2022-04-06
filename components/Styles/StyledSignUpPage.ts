import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledSignUpPage = styled.main`
    padding: 0 2rem 5rem;
    margin: 7rem auto 0rem;
    max-width: 80rem;

    form {
        margin-bottom: 5rem;
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

        section {
            margin-right: 0;
        }
    }
`;
