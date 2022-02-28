import { createRef, FC } from "react";
import AuthNavBar from "./AuthNavBar";
import { StyeldAuthContainer } from "./StyeldAuthContainer";
import { GiHamburgerMenu } from "react-icons/gi";

const AuthenticatedContainer: FC = ({ children }) => {
    const asideRef = createRef<HTMLElement>();

    const toggleAside = () => {
        let aside = asideRef.current!;

        aside.classList.toggle("open");
    };
    return (
        <StyeldAuthContainer className="container">
            <button className="toggle__dashboard" onClick={toggleAside}>
                <GiHamburgerMenu />
            </button>
            <AuthNavBar ref={asideRef} />
            {children}
        </StyeldAuthContainer>
    );
};

export default AuthenticatedContainer;
