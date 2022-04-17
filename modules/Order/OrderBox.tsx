import {
    ChangeEventHandler,
    FC,
    FormEventHandler,
    MouseEventHandler,
    useState,
} from "react";
import { Order } from "../../pages/dashboard/order";
import { StyledOrderBox } from "./StyledOrderBox";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import InputLabel from "../../components/Input/InputLabel";
import DefaultInput from "../../components/Input/DefaultInput";
import { copyToClipBoard } from "../../utils/copytoClipboard";
import InputFile from "../../components/Input/InputFile";

interface IOrderBox {
    order: Order;
}

const OrderBox: FC<IOrderBox> = ({ order }) => {
    const { back } = useRouter();
    const [values, setValues] = useState({
        hash: "",
        amount: "",
        screenshot: "",
    });

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        let { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const address = "TQdposcciLNWoi46jhohwrRKjUcXjNGeiB";

    const handleCopy: MouseEventHandler<HTMLButtonElement> = async () => {
        try {
            await copyToClipBoard(address);
            toast.success("Address copied to clipboard!");
        } catch (error) {
            toast.error("Failed to copy address to clipboard!");
        }
    };

    const handleOrder: FormEventHandler = (e) => {
        e.preventDefault();
        if (!values.hash && !values.amount)
            return toast.error("Please fill all fields");

        toast.success(`amount to ${order}: ${values.amount}`);
        setValues({ hash: "", amount: "", screenshot: "" });
    };

    let suggestedAmount = [30, 50, 100, 500, 1_000, 5_000, 10_000, 50_000];

    const handleScreenshotChanged = (screenshot: string) => {
        setValues((prev) => ({ ...prev, screenshot }));
    };

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
                <InputLabel
                    label="USDT"
                    labelClassName="order__form--label"
                    others={{ className: "order__form-input" }}
                    type="number"
                    id="amount"
                    name="amount"
                    onChange={(e) => {
                        if (!Number(e.target.value)) {
                            return toast.error("Only numbers are allowed");
                        }
                        handleChange(e);
                    }}
                    value={values.amount}
                    placeholder={`*Please input the number of USDT to ${order}`}
                    aria-label={`amount to ${order}`}
                />

                <ul className="order__suggested--ul">
                    {suggestedAmount.map((amount) => (
                        <li key={amount} className="order__suggested--li">
                            <button
                                className="btn order__suggested--btn"
                                type="button"
                                onClick={() =>
                                    setValues((prev) => ({
                                        ...prev,
                                        amount: amount as unknown as string,
                                    }))
                                }
                            >
                                {amount}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="form__control order__receiver">
                    <DefaultInput
                        label="Receiver's address"
                        labelClassName="order__form--label"
                        others={{ className: "order__form-input" }}
                        type="text"
                        id="receiver"
                        name="receiver"
                        defaultValue={address}
                    />
                    <button
                        className="order__receiver--copy"
                        type="button"
                        onClick={handleCopy}
                    >
                        Copy
                    </button>
                </div>

                <InputLabel
                    label="Transaction TXID or Transaction HASH"
                    labelClassName="order__form--label"
                    Note={
                        <p>
                            Note:{" "}
                            <span className="danger">
                                It is forbidden to use the TXID or HASH of other
                                users, ant the account will be frozen if found
                            </span>
                        </p>
                    }
                    others={{ className: "order__form-input" }}
                    type="text"
                    id="hash"
                    name="hash"
                    onChange={handleChange}
                    value={values.hash}
                    placeholder="*Transaction TXID or Transaction HASH"
                    aria-label="Transaction TXID or Transaction HASH"
                />
                <InputFile
                    label="Upload a screenshot"
                    setImage={handleScreenshotChanged}
                    img={values.screenshot}
                />
                <button
                    onClick={handleOrder}
                    type="submit"
                    className="btn order__submit"
                >
                    Confirm
                </button>
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
