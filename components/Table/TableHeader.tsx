import { FC } from "react";
import { ITable } from "./Index";

type THead = Pick<ITable, "theader">;

const TableHeader: FC<THead> = ({ theader }) => {
    return (
        <thead>
            <tr>
                {theader.map((head) => (
                    <th key={head}>{head}</th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
