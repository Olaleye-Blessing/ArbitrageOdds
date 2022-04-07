import Link from "next/link";
import { FC, useEffect, useRef } from "react";
import HomeLink from "../HomeLink";
import { navLinks } from "./navLinks";
import { StyledNav } from "./Styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";

const Index: FC = () => {
    const { user, logout } = useAuth();
    const { pathname } = useRouter();
    const mobileToggleBtn = useRef<HTMLButtonElement>(null);
    const mobileContainer = useRef<HTMLDivElement>(null);

    const closeMobileCont = () => {
        let container = mobileContainer.current!;
        container.classList.remove("open");
    };

    const toggleMobileCont = () => {
        let container = mobileContainer.current!;

        container.classList.toggle("open");
    };

    useEffect(() => {
        closeMobileCont();
    }, [pathname]);

    return (
        <StyledNav>
            <div className="container nav__container">
                <HomeLink />
                <button
                    ref={mobileToggleBtn}
                    onClick={toggleMobileCont}
                    className="nav__toggle"
                >
                    <GiHamburgerMenu />
                </button>
                <div className="nav__lists-cont" ref={mobileContainer}>
                    <ul className="nav__lists">
                        {navLinks.map((link) => (
                            <li key={link.text} className="nav__list">
                                <Link href={link.path}>
                                    <a className="nav__links">{link.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {user ? (
                        <button
                            className="btn nav__btn--logout nav__auth"
                            onClick={logout}
                        >
                            Log out
                        </button>
                    ) : (
                        <Link href={"/login"}>
                            <a className="btn nav__auth">Log In</a>
                        </Link>
                    )}
                </div>
            </div>
        </StyledNav>
    );
};

export default Index;
