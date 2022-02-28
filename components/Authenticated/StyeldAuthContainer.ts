import styled from "styled-components";

export const StyeldAuthContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4rem;
    margin-top: 8rem;
    /* background-color: red; */
    min-height: calc(100vh - 14.6rem);

    .auth {
        &__aside {
            flex: 1;
            max-width: max-content;

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
                    padding: 1.8rem 2rem;
                    width: max-content;

                    &.active {
                        background-color: var(--primary, red);
                    }

                    span {
                        &:first-child {
                            font-size: 2rem;
                            color: black;
                            margin-right: 1rem;
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
            background-color: var(--primary);
            border-radius: 15px 0px 0px 0px;
            align-self: stretch;
            padding: 10.2rem 13.7rem;

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
`;
