import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyeldAuthContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    min-height: calc(100vh - 14.6rem);
    flex-direction: column;
    position: relative;

    .toggle__dashboard {
        font-size: 2.5rem;
        color: var(--primary);
        color: var(--white);
        margin-left: 2rem;
    }

    .auth {
        &__aside {
            flex: 1;
            /* max-width: max-content; */
            position: absolute;
            top: 5rem;
            left: -100%;
            width: 100%;
            background-color: var(--secondary);
            transition: left 0.2s linear;

            &.open {
                left: 0;
            }

            &--nav {
                &-lists {
                }

                &-list {
                }

                &-item {
                    color: var(--white-1);
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    display: block;
                    border-radius: 1rem;
                    padding: 1rem 2rem;
                    width: max-content;

                    &.active {
                        background-color: var(--primary, red);
                    }

                    span {
                        &:first-child {
                            font-size: 2rem;
                            color: black;
                            margin-right: 3rem;
                            padding-top: 0.3rem;
                            display: inline-block;

                            svg {
                                width: 2.3rem;
                                height: 2.3rem;
                            }
                        }

                        &:nth-child(2) {
                            font-size: 2rem;
                        }
                    }
                }
            }
        }

        &__main {
            flex: 2;

            align-self: stretch;
            padding: 3rem 2rem;

            &--order {
                margin-bottom: 6.5rem;

                &-btn {
                    padding: 2.4rem 6.5rem;
                    background-color: rgba(196, 196, 196, 0.5);
                    color: var(--white);

                    &:nth-child(1) {
                        margin-right: 5.2rem;
                    }
                }
            }

            &--note {
                font-weight: bold;

                span {
                    display: block;
                    margin-bottom: 1.2rem;
                }
            }
        }
    }

    @media screen and (${device.tablet}) {
        margin-top: 8rem;
        gap: 4rem;
        flex-direction: row;
        padding-left: 2rem;
        padding-right: 2rem;

        .toggle__dashboard {
            display: none;
        }

        .auth {
            &__aside {
                position: static;
                flex: 1;
                max-width: max-content;
                width: auto;
            }

            &__main {
                border-radius: 15px 0px 0px 0px;
                background-color: var(--primary);
            }
        }
    }

    @media screen and (${device.laptop}) {
        .auth {
            &__aside {
                padding-top: 8.5rem;
            }

            &__main {
                padding: 8.2rem 13.7rem 3rem;
            }
        }
    }
`;
