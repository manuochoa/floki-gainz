import logo from "../images/logo.png";
import Social from './common/Social';

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper container">
                <a href="/" className="logo">
                    <img src={logo} className="logo__icon" alt="logo" />
                </a>
                <ul className="header__menu">
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
                <div className="header__column">
                    <Social className="social--header" />
                    <a href="/" className="button button--header header__button">Whitepaper</a>
                </div>
            </div>
        </header>
    )
}
