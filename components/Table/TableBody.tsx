import React, { FC } from "react";
import { ITable } from "./Index";

type ITBody = Pick<ITable, "tbody">;

const TableBody: FC<ITBody> = ({ tbody }) => {
    return (
        <tbody>
            {tbody.map((items, i) => (
                <tr key={i}>
                    {items.map((item, j) => (
                        <td key={j}>{item}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
