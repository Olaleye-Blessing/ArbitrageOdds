import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { asidenavLinks } from "./asidenavLinks";

const AuthNavBar = () => {
    const { pathname } = useRouter();
    console.log({ pathname });

    return (
        <aside className="auth__aside">
            <nav className="auth__aside--nav">
                <ul className="auth__aside--nav-lists">
                    {asidenavLinks.map((item) => (
                        <li
                            key={item.text}
                            className={`auth__aside--nav-list}`}
                        >
                            {item.path ? (
                                <Link href={item.path}>
                                    <a
                                        className={`auth__aside--nav-item ${
                                            pathname === item.path && "active"
                                        }`}
                                    >
                                        <span>
                                            <item.Icon />
                                        </span>
                                        <span>{item.text}</span>
                                    </a>
                                </Link>
                            ) : (
                                <button
                                    className="auth__aside--nav-item"
                                    onClick={item.onClick}
                                >
                                    <span>
                                        <item.Icon />
                                    </span>
                                    <span>{item.text}</span>
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default AuthNavBar;
