import styled from "styled-components";

export const StyledDashBoard = styled.section`
    /*  */
    .dashboard {
        &__cont {
            margin-bottom: 3rem;

            &-div {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            &-head {
                flex: 1;
            }

            &-val {
                background: rgba(196, 196, 196, 0.5);
                border-radius: 5px;
                padding: 1rem 2rem;
                &.w-full {
                    flex: 2;
                }
            }

            &-btn {
                width: 80%;
                max-width: 40rem;
                display: block;
                margin-left: auto;
                margin-top: 0.4rem;
                color: var(--white);
                /* text-align: right; */
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: flex-end;

                &-icon {
                    padding-top: 0.5rem;
                    font-size: 1.2rem;
                    margin-right: 0.3rem;
                }
            }
        }
    }
`;
