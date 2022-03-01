import styled from "styled-components";

export const StyledTable = styled.table`
    /* colors */
    background: rgba(196, 196, 196, 0.3);
    /*  */

    margin-top: 3rem;
    border-radius: 1rem;
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;

    thead {
        th {
            &:nth-child(1) {
                width: 30%;
            }

            &:nth-child(2) {
                width: 20%;
            }

            &:nth-child(3) {
            }
        }
    }

    th,
    td {
        padding: 2rem;
    }

    th {
        letter-spacing: 0.2rem;
    }

    td {
        letter-spacing: 0.1rem;
    }

    tbody td {
        text-align: center;
    }

    tr {
        border-bottom: 0.5rem solid var(--secondary);
    }

    tbody {
        tr {
            &:last-child {
                border: 0;
            }
        }
    }
`;
