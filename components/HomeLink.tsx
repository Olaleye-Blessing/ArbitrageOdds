import Link from "next/link";
import React, { FC } from "react";
import { HomeLogo } from "../Svgs/HomeLogo";

const HomeLink: FC<{ className?: string }> = ({ className }) => {
    return (
        <Link href={"/"}>
            <a className={`homeLogo ${className}`}>
                <figure>
                    <HomeLogo />
                </figure>
                <span>ArbitrageOdds</span>
            </a>
        </Link>
    );
};

export default HomeLink;
