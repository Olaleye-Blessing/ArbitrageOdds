import React, { FC } from "react";
import { StyledROISection } from "./Styles";

const ROI: FC = () => {
    return (
        <StyledROISection className="roi">
            <h3 className="roi__head">RETURN ON INVESTMENT</h3>
            <p className="roi__p">
                Last 7 days: <span className="roi__val">5.8%</span>
            </p>
            <p className="roi__p">
                Last 30 days: <span className="roi__val">22.6%</span>
            </p>
            <p className="roi__p">
                Last 90 days: <span className="roi__val">74.6%</span>
            </p>
        </StyledROISection>
    );
};

export default ROI;
