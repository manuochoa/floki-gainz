import { useEffect, useState } from "react";
import logo from "../images/logo.png";
import Social from './common/Social';

export default function Header() {
    const [mobileScreen, setMobileScreen] = useState();
    const [menuOpened, setMenuOpened] = useState();

    const handleMobileScreen = () => {
        setMobileScreen(window.innerWidth < 990);
    }

    useEffect(() => {
        handleMobileScreen();

        window.addEventListener('resize', handleMobileScreen);

        return () => {
            window.removeEventListener('resize', handleMobileScreen);
        }
    }, []);

    return (
        <header className="header">
            <div className="header__wrapper container">
                <a href="/" className="logo header__logo">
                    <img src={logo} className="logo__icon" alt="logo" />
                </a>
                {!mobileScreen && <Menu />}
                <div className="header__column">
                    <Social className="social--header" />
                    <a href="/" className="button button--header header__button">Whitepaper</a>
                    <button className={"header__mobile-button" + (menuOpened ? " opened" : "")} onClick={() => setMenuOpened(!menuOpened)}><span></span></button>
                </div>
            </div>
            {mobileScreen && <Menu opened={menuOpened ? " opened" : ""} />}
        </header>
    )
}

const Menu = ({ opened }) => {
    return (
        <ul className={"header__menu " + (opened || "")}>
            <li className="header__menu-item">
                <button to="/" className="header__menu-link">About</button>
            </li>
            <li className="header__menu-item">
                <button to="/" className="header__menu-link">Benefits</button>
            </li>
            <li className="header__menu-item">
                <button to="/" className="header__menu-link">Mint</button>
            </li>
            <li className="header__menu-item">
                <button to="/" className="header__menu-link">Roadmap</button>
            </li>
            <li className="header__menu-item">
                <button to="/" className="header__menu-link">Tokenomics</button>
            </li>
            <li className="header__menu-item">
                <button to="/" className="header__menu-link">FAQ</button>
            </li>
        </ul>
    );
};