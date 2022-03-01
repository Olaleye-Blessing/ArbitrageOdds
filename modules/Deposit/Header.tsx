import { FC } from "react";
import { Order } from "../../pages/dashboard/deposit";

interface IHeader {
    handleChangeOrder: (order: Order) => void;
}

const Header: FC<IHeader> = ({ handleChangeOrder }) => {
    return (
        <>
            <header className="auth__main--order order__header">
                <button
                    className="btn auth__main--order-btn order__btn"
                    onClick={(e) => handleChangeOrder("deposit")}
                >
                    Deposit
                </button>
                <button
                    className="btn auth__main--order-btn order__btn"
                    onClick={(e) => handleChangeOrder("withdraw")}
                >
                    Withdraw
                </button>
            </header>
            <p className="auth__main--note ">
                <span className="underline">Note:</span>
                Deposits and withdrawals are done on the TRC20 wallet{" "}
            </p>
        </>
    );
};

export default Header;
