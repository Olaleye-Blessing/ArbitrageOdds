import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const StyledNav = styled.nav`
    padding: 1.5rem 2rem;
    position: relative;
    z-index: 900;

    a {
        color: var(--white);
    }

    .homeLogo {
        margin-right: 2rem;
    }

    .nav {
        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__toggle {
            color: var(--white);
            font-size: 2.5rem;
        }

        &__lists {
            margin-left: auto;
            display: flex;
            flex-direction: column;

            &-cont {
                position: absolute;
                top: 7rem;
                width: 100%;
                left: -100%;
                background-color: var(--secondary);
                padding: 0 2rem;
                transition: left 0.2s linear;

                &.open {
                    left: 0;
                }
            }
        }

        &__list {
            margin-bottom: 2rem;
        }
    }

    @media screen and (${device.tablet}) {
        .nav {
            &__container {
            }

            &__toggle {
                display: none;
            }

            &__lists {
                flex-direction: row;
                gap: 2rem;

                &-cont {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: static;
                    gap: 2rem;
                }
            }

            &__list {
                margin: 0;
            }
        }
    }
`;
