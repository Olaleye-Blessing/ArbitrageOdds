import React from "react";
import AuthenticatedContainer from "../../components/Authenticated/AuthenticatedContainer";
import { StyledStatisticsPage } from "../../components/Styles/Pages/StyledStatisticsPage";
import Table from "../../components/Table/Index";

const statistics = () => {
    const tableHeader = ["DATE", "AMOUNT", "COMMISSION"];

    let tableBody = [
        ["Jan 01", "$1000", "$7"],
        ["Jan 03", "$1007", "$12.04"],
        ["Jan 04", "$1019", "$13.55"],
        ["Jan 09", "$1032", "$41.88"],
        ["Jan 10", "$1073", "$83.73"],
    ];
    const chartData = [
        { title: "One", value: 10, color: "#000" },
        { title: "Two", value: 75, color: "#648B60" },
        { title: "Three", value: 25, color: "#fff" },
    ];

    const ROIS = [
        { header: "ROI OVER THE PAST 7 DAYS", value: "5.66%" },
        { header: "ROI OVER THE PAST 30 DAYS", value: "22.6%" },
    ];

    return (
        <>
            <AuthenticatedContainer>
                <StyledStatisticsPage className="auth__main">
                    <header>
                        <p className="statistics__date">
                            Returns:
                            <span className="statistics__date--from">
                                Jan 01 2021
                            </span>{" "}
                            <span className="statistics__date--to">
                                Jan 31 2021
                            </span>
                        </p>
                    </header>
                    <section className="statistics__sec">
                        <Table theader={tableHeader} tbody={tableBody} />
                        <section className="statistics__rois">
                            {ROIS.map(({ header, value }) => (
                                <figure
                                    key={header}
                                    className="statistics__roi-fig"
                                >
                                    <figcaption className="statistics__roi-head">
                                        {header}
                                    </figcaption>
                                    <div className="statistics__roi-circle">
                                        {value}
                                    </div>
                                </figure>
                            ))}
                        </section>
                    </section>
                </StyledStatisticsPage>
            </AuthenticatedContainer>
        </>
    );
};

export default statistics;
