import styled from "styled-components";

export const StyledOrderBox = styled.section`
    h2 {
        margin-bottom: 2rem;
        text-transform: capitalize;
    }

    .order {
        &__form {
            &-control {
                flex-wrap: wrap;
                row-gap: 0;
            }

            &-label {
                flex: 1 1 max-content;
                margin-bottom: 1rem;
            }

            &-input {
                margin-bottom: 1rem;
                flex: 2 1 max-content;
                background: rgba(196, 196, 196, 0.5);
                padding-right: 1rem;
                -webkit-appearance: none;
                appearance: none;
            }
        }

        &__how {
            margin-top: 2rem;
            font-weight: bold;
        }
    }
`;
