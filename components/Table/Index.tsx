import React, { FC } from "react";
import { StyledTable } from "./styles";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export interface ITable {
    className?: string;
    theader: string[];
    tbody: string[][];
}

const Table: FC<ITable> = ({ theader, tbody, className = "" }) => {
    return (
        <StyledTable className={className}>
            <TableHeader theader={theader} />
            <TableBody tbody={tbody} />
        </StyledTable>
    );
};

export default Table;
