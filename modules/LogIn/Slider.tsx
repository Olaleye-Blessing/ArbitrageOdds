import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import ROI from "./ROI";

const Slider: FC = () => {
    let sliderItems = [ROI, ROI, ROI];

    return (
        <section className="dynamic">
            <Splide
                options={{
                    rewind: true,
                    gap: "1rem",
                    arrows: false,
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
