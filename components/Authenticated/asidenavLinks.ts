import { AiFillHome } from "react-icons/ai";

export const asidenavLinks = [
    { text: "Dashboard", path: "/dashboard", Icon: AiFillHome },
    { text: "Statistics", path: "/dashboard/statistics", Icon: AiFillHome },
    { text: "Transactions", path: "/dashboard/transactions", Icon: AiFillHome },
    {
        text: "Deposit | withdraw",
        path: "/dashboard/deposit",
        Icon: AiFillHome,
    },
    {
        text: "Log Out",
        Icon: AiFillHome,
        onClick: () => {
            alert("log out");
        },
    },
];
