import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import ROI from "./ROI";
import Review from "./Review";

const Slider: FC = () => {
    let sliderItems = [Review, ROI, ROI];

    return (
        <section className="dynamic">
            <Splide
                options={{
                    rewind: true,
                    gap: "1rem",
                    arrows: false,
                    autoplay: true,
                    interval: 15 * 1_000, // 15 secs
                }}
            >
                {sliderItems.map((Item, i) => (
                    <SplideSlide key={i}>
                        <Item />
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
};

export default Slider;
