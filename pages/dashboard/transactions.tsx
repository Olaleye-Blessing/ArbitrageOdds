import { NextPage } from "next";
import AuthenticatedContainer from "../../components/Authenticated/AuthenticatedContainer";
import { StyledTransactionPage } from "../../components/Styles/Pages/Transactons";
import Table from "../../components/Table/Index";
import { PieChart } from "react-minimal-pie-chart";
import ProtectedRoute from "../../components/ProtectedRoute";

const Transactions: NextPage = () => {
    const tableHeader = ["DATE", "TYPE", "AMOUNT"];
    let tableBody = [
        ["Jan 06", "DEPOSIT", "$700"],
        ["Jan 23", "WITHDRAWAL", "$300"],
    ];
    const chartData = [
        { title: "One", value: 10, color: "#000" },
        { title: "Two", value: 75, color: "#648B60" },
        { title: "Three", value: 25, color: "#fff" },
    ];
    const chartIndicators = [
        { text: "Deposits", color: "#648B60" },
        { text: "Withdrawal", color: "#000" },
        { text: "Pending", color: "#fff" },
    ];

    return (
        <>
            <AuthenticatedContainer>
                <StyledTransactionPage className="auth__main">
                    <header>
                        <p className="transactions__date">
                            Select Date:
                            <span className="transactions__date--from">
                                Jan 01 2021
                            </span>{" "}
                            <span className="transactions__date--to">
                                Jan 31 2021
                            </span>
                        </p>
                    </header>
                    <section className="transactions__sec">
                        <Table theader={tableHeader} tbody={tableBody} />
                        <div className="transactions__chart">
                            <PieChart
                                data={chartData}
                                className="transactions__chart--pie"
                            />
                            <div className="transactions__indicators">
                                {chartIndicators.map(({ color, text }) => (
                                    <div
                                        key={text}
                                        className="transactions__indicators--item"
                                        style={{ color }}
                                    >
                                        <span
                                            className="transactions__indicators--item-square"
                                            style={{ background: color }}
                                        ></span>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </StyledTransactionPage>
            </AuthenticatedContainer>
        </>
    );
};

export default ProtectedRoute(Transactions);
