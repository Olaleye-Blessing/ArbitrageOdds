import styled from "styled-components";
import { device } from "../../styles/breakpoints";

// export const StyledOrderBox = styled.section`
//     h2 {
//         margin-bottom: 2rem;
//         text-transform: capitalize;
//     }

//     .order {
//         &__form {
//             &-control {
//                 flex-wrap: wrap;
//                 row-gap: 0;
//             }

//             &-label {
//                 flex: 1 1 max-content;
//                 margin-bottom: 1rem;
//             }

//             &-input {
//                 margin-bottom: 1rem;
//                 flex: 2 1 max-content;
//                 background: rgba(196, 196, 196, 0.5);
//                 padding-right: 1rem;
//                 -webkit-appearance: none;
//                 appearance: none;
//             }
//         }

//         &__how {
//             margin-top: 2rem;
//             font-weight: bold;
//         }
//     }
// `;

export const StyledOrderBox = styled.section`
    h2 {
        margin-bottom: 2rem;
        text-transform: capitalize;
    }

    .order {
        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;

            &--back {
                margin-bottom: 2rem;
                font-weight: bold;
            }
        }

        &__channel {
            text-transform: capitalize;

            span {
                color: var(--primary);
                font-weight: bold;
                display: inline-block;
                padding-left: 0.4rem;
            }
        }

        &__form {
            &--control {
                flex-wrap: wrap;
                row-gap: 0;
                margin-top: 1.2rem;
            }

            &--label {
                margin-bottom: 0.5rem;
                display: block;
                font-weight: bold;
            }
        }

        &__suggested {
            &--ul {
                display: flex;
                flex-wrap: wrap;
            }

            &--li {
                margin: 1.2rem;
                margin-left: 0;
            }

            &--btn {
                padding-left: 3rem;
                padding-right: 3rem;
                display: block;
                width: 100%;
                border: 0.1rem solid;
                color: var(--white-1);

                &:hover {
                    border-color: var(--primary);
                }
            }
        }

        &__receiver {
            position: relative;

            &--copy {
                position: absolute;
                top: 4.2rem;
                right: 0.2rem;
                transform: translate(-50%, 0);
                font-weight: 500;
            }
        }

        &__submit {
            display: block;
            background-color: var(--primary);
            border-radius: 1rem;
            width: 100%;
            max-width: 20rem;
            margin: 2rem auto 0;
            color: var(--white-1);
            font-weight: 500;
            margin-top: 6rem;
        }
    }

    @media screen and (${device.tablet}) {
        .order {
            &__form {
                &-input {
                    background-color: var(--secondary);
                }
            }

            &__channel {
                span {
                    color: var(--secondary);
                }
            }

            &__suggested {
                &--btn {
                    &:hover {
                        border-color: inherit;
                    }
                }
            }

            &__submit {
                background-color: var(--secondary);
            }
        }
    }
`;
