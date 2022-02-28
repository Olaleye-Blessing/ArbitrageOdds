import React, { FC, FormEventHandler, useState } from "react";
import { Order } from "../../pages/dashboard/deposit";
import { StyledOrderBox } from "./StyledOrderBox";
import Input from "./../../components/Input/Index";

interface IOrderBox {
    order: Order;
}

const OrderBox: FC<IOrderBox> = ({ order }) => {
    const [value, setValue] = useState("");

    const handleOrder: FormEventHandler = (e) => {
        e.preventDefault();
        alert("ordered...");
    };

    return (
        <StyledOrderBox>
            <h2 className="underline">{order} amount:</h2>
            <form className="order__form" onSubmit={handleOrder}>
                <div className="form__control form__control-flex order__form-control">
                    <label htmlFor={order!} className="order__form-label">
                        Input the {order} amount:{" "}
                    </label>
                    <Input
                        others={{ className: "order__form-input" }}
                        type="number"
                        id={order!}
                        name={order!}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        value={value}
                        placeholder="$"
                        aria-label={`amount to ${order}`}
                    />
                </div>
                <div>
                    <label htmlFor="only">
                        <input
                            type="checkbox"
                            name="only"
                            id="only"
                            className="order__form-only"
                        />{" "}
                        Use Trc20 only
                    </label>
                </div>
            </form>
            <p className="underline order__how">How to make {order}s:</p>
        </StyledOrderBox>
    );
};

export default OrderBox;
