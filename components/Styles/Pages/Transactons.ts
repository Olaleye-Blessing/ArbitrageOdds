import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledTransactionPage = styled.main`
    .transactions {
        &__date {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-weight: 700;

            &--from,
            &--to {
                display: inline-block;
                background: var(--primary);
                border-radius: 0.3rem;
                font-style: italic;
                padding: 0.5rem 1.4rem;
                margin-left: 3.4rem;
                font-size: 1.4rem;
            }

            &--from {
            }

            &--to {
            }
        }

        &__chart {
            max-width: 30rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-right: auto;
            margin-left: auto;
            margin-top: 4rem;
            background-color: var(--primary);

            &--pie {
            }
        }

        &__indicators {
            margin-top: 1rem;

            &--item {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                font-weight: 700;
                font-style: italic;
                font-size: 1.6rem;

                &-square {
                    display: inline-block;
                    width: 1rem;
                    height: 1rem;
                    margin-right: 1.6rem;
                }
            }
        }
    }

    @media screen and (${device.tablet}) {
        .transactions {
            &__date {
                &--from,
                &--to {
                    background: var(--secondary);
                }
            }

            &__chart {
                background-color: transparent;
            }
        }
    }

    @media screen and (${device.laptop}) {
        padding-left: 4rem !important;
        padding-right: 4rem !important;

        .transactions {
            &__sec {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                column-gap: 3rem;
            }

            &__indicators {
                margin-top: 3rem;
            }
        }
    }
`;
