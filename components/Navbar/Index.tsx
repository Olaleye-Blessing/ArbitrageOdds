import Link from "next/link";
import { FC } from "react";
import HomeLink from "../HomeLink";
import { navLinks } from "./navLinks";
import { StyledNav } from "./Styles";

const Index: FC = () => {
    return (
        <StyledNav>
            <div className="container">
                <HomeLink />
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.text}>
                            <Link href={link.path}>
                                <a>{link.text}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledNav>
    );
};

export default Index;
