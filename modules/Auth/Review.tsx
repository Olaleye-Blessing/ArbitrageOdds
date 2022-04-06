import { FC } from "react";
import { StyledReviewSection } from "./Styles";

const Review: FC = () => {
    return (
        <StyledReviewSection className="review">
            <p className="review__text">
                They simply make arbitrage easy, ArbitrageBet takes off the
                stress of having to maintain multiple accounts and
                softwares....truly a brilliant solution.
            </p>
            <p className="review__author">Riley Burke, UK</p>
        </StyledReviewSection>
    );
};

export default Review;
