import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledSliderSection = styled.section`
    padding-left: 2rem;
    padding-right: 2rem;

    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;

    .splide {
        &__track {
        }

        &__pagination {
            padding-bottom: 1rem;
        }
    }
`;

export const StyledROISection = styled.div`
    font-family: var(--font-pri);
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(187, 167, 115, 0.75);
    border-radius: 15px 0px 0px 0px;
    padding: 3rem 1rem 3rem;

    .roi {
        &__head {
            color: rgba(255, 255, 255, 0.6);
            font-size: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        &__p {
            color: var(--white-1);
            font-size: 2rem;
            margin-bottom: 2rem;
            font-style: italic;
        }

        &__val {
            display: inline-block;
            padding-left: 1rem;
        }
    }

    @media screen and (${device.laptop}) {
        padding-top: 5.6rem;

        .roi {
            &__head {
                margin-bottom: 7.7rem;
                font-size: 3rem;
            }

            &__p {
                font-size: 4rem;
                margin-bottom: 4rem;
            }

            &__val {
            }
        }
    }
`;

export const StyledReviewSection = styled.section`
    background-color: var(--primary);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    .review {
        &__text {
            margin-bottom: 1rem;
            font-weight: bold;
            max-width: 40rem;
        }

        &__author {
            font-weight: bolder;
            color: var(--secondary);
            font-style: italic;
            font-size: 2rem;
        }
    }

    @media screen and (${device.laptop}) {
        .review {
            &__text {
                font-size: 2.5rem;
                margin-bottom: 2.5rem;
            }
        }
    }
`;

export const StyledGameSection = styled.section`
    background: var(--primary);
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
        font-size: clamp(2.2rem, calc(4vw + 1em), 4rem);
        font-weight: bold;
    }
`;
