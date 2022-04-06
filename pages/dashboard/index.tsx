import AuthenticatedContainer from "../../components/Authenticated/AuthenticatedContainer";
import { StyledDashBoard } from "../../modules/Dashboard/StyledDashboard";
import { FaCopy } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import ProtectedRoute from "../../components/ProtectedRoute";

const Dashboard = () => {
    const options = [
        {
            head: "Referral link:",
            value: "referral link",
            button: "copy referral link",
            Icon: FaCopy,
        },
        { head: "Amount earned through referrals:", value: "200" },
        { head: "Pending account balance:", value: "100" },
        { head: "Available Account balance:", value: "300" },
        {
            head: "Withdrawal wallet:",
            value: "wallet address",
            button: "click here to change or set your withdrawal wallet",
            Icon: MdDoubleArrow,
        },
    ];

    return (
        <>
            <AuthenticatedContainer>
                <StyledDashBoard className="auth__main">
                    {options.map((option) => (
                        <div key={option.head} className="dashboard__cont">
                            <div className="dashboard__cont-div">
                                <p className="dashboard__cont-head">
                                    {option.head}
                                </p>
                                <p
                                    className={`dashboard__cont-val ${
                                        option.button && "w-full"
                                    }`}
                                >
                                    {option.value}
                                </p>
                            </div>
                            {option.button && (
                                <button className="dashboard__cont-btn">
                                    <span className="dashboard__cont-btn-icon">
                                        <option.Icon />
                                    </span>
                                    {option.button}
                                </button>
                            )}
                        </div>
                    ))}
                </StyledDashBoard>
            </AuthenticatedContainer>
        </>
    );
};

export default ProtectedRoute(Dashboard);
