import React, { FC, FormEventHandler, useState } from "react";
import { Order } from "../../pages/dashboard/order";
import { StyledOrderBox } from "./StyledOrderBox";
import Input from "./../../components/Input/Index";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface IOrderBox {
    order: Order;
}

const OrderBox: FC<IOrderBox> = ({ order }) => {
    const { back } = useRouter();
    const [value, setValue] = useState("");

    const handleOrder: FormEventHandler = (e) => {
        e.preventDefault();
        if (!value) return toast.error(`Please, input an amount!`);

        toast.success(`amount to ${order}: ${value}`);
        setValue("");
    };

    let suggestedAmount = [30, 50, 100, 500, 1_000, 5_000, 10_000, 50_000];

    return (
        <StyledOrderBox>
            <header className="order__header">
                <h2 className="underline">{order} amount:</h2>
                <button
                    type="button"
                    onClick={back}
                    className="btn order__header--back"
                >
                    Go Back
                </button>
            </header>
            <form action="">
                <p className="order__channel">
                    {order} Channel: <span>USDT</span>
                </p>
                <div className="form__control order__form--control">
                    <label htmlFor={order!} className="order__form--label">
                        USDT Top-up
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
                        placeholder="* Please input the number of USDT to be traded"
                        aria-label={`amount to ${order}`}
                    />
                </div>
                <ul className="order__suggested--ul">
                    {suggestedAmount.map((amount) => (
                        <li key={amount} className="order__suggested--li">
                            <button
                                className="btn order__suggested--btn"
                                type="button"
                                onClick={() =>
                                    setValue(amount as unknown as string)
                                }
                            >
                                {amount}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleOrder}
                    type="submit"
                    className="btn order__submit"
                >
                    Confirm
                </button>
                {/* <div>
                    <label htmlFor="">Receiver&apos;s address</label>
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
                </div> */}
            </form>
        </StyledOrderBox>
    );

    // return (
    //     <StyledOrderBox>
    //         <h2 className="underline">{order} amount:</h2>
    //         <form className="order__form" onSubmit={handleOrder}>
    //             <div className="form__control form__control-flex order__form-control">
    //                 <label htmlFor={order!} className="order__form-label">
    //                     Input the {order} amount:{" "}
    //                 </label>
    //                 <Input
    //                     others={{ className: "order__form-input" }}
    //                     type="number"
    //                     id={order!}
    //                     name={order!}
    //                     onChange={(e) => {
    //                         setValue(e.target.value);
    //                     }}
    //                     value={value}
    //                     placeholder="$"
    //                     aria-label={`amount to ${order}`}
    //                 />
    //             </div>
    //             <div>
    //                 <label htmlFor="only">
    //                     <input
    //                         type="checkbox"
    //                         name="only"
    //                         id="only"
    //                         className="order__form-only"
    //                     />{" "}
    //                     Use Trc20 only
    //                 </label>
    //             </div>
    //         </form>
    //         <p className="underline order__how">How to make {order}s:</p>
    //     </StyledOrderBox>
    // );
};

export default OrderBox;
