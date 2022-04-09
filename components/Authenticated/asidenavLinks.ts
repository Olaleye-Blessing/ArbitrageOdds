import { DashboardMainSvg } from "../../Svgs/DashBaordMain";
import { DashBoardOrder } from "../../Svgs/DashBoardOrder";
import { DashBoardStats } from "../../Svgs/DashBoardStats";
import { DashBoardTransactions } from "../../Svgs/DashBoardTransactions";
import { Logout } from "../../Svgs/Logout";

export const asidenavLinks = [
    { text: "Dashboard", path: "/dashboard", Icon: DashboardMainSvg },
    { text: "Statistics", path: "/dashboard/statistics", Icon: DashBoardStats },
    {
        text: "Transactions",
        path: "/dashboard/transactions",
        Icon: DashBoardTransactions,
    },
    {
        text: "Deposit | withdraw",
        path: "/dashboard/order",
        Icon: DashBoardOrder,
    },
    {
        text: "Log Out",
        Icon: Logout,
    },
];
