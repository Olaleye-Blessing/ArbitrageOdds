import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const StyledStatisticsPage = styled.main`
    .statistics {
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
        }

        &__sec {
        }

        &__rois {
            margin-top: 2rem;
        }

        &__roi {
            &-fig {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-bottom: 2rem;
                font-weight: 700;
                font-style: italic;
            }

            &-head {
                text-align: center;
            }

            &-circle {
                width: 15.8rem;
                height: 15.8rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 3.6rem;
                background: rgba(196, 196, 196, 0.3);
                color: var(--secondary);
                margin-top: 0.4rem;
            }
        }
    }

    @media screen and (${device.tablet}) {
        .statistics {
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

        .statistics {
            &__sec {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                column-gap: 3rem;
            }

            &__rois {
                flex: 1 1 35rem;
            }
        }
    }
`;
