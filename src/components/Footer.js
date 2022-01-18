import { useState } from "react";
import logo from "../images/logo.png";
import Arrow from './../Icons/Arrow';
import Social from "./common/Social";

export default function Footer() {
    const [value, setValue] = useState("");

    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__top">
                    <div className="logo">
                        <img src={logo} className="logo__icon" alt="logo" />
                    </div>
                    <div className="input-wrapper input-wrapper--footer">
                        <input placeholder="Enter your email to sign up for updates" className="input input-wrapper__input" value={value} onChange={(e) => setValue(e.target.value)} />
                        <button className="button input-wrapper__button">Subscribe</button>
                    </div>
                    <button className="footer__button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <Arrow className="footer__button-arrow" />
                    </button>
                </div>
                <ul className="footer__menu">
                    <li className="footer__menu-item">
                        <button to="/" className="footer__menu-link">About</button>
                    </li>
                    <li className="footer__menu-item">
                        <button to="/" className="footer__menu-link">Benefits</button>
                    </li>
                    <li className="footer__menu-item">
                        <button to="/" className="footer__menu-link">Mint</button>
                    </li>
                    <li className="footer__menu-item">
                        <button to="/" className="footer__menu-link">Roadmap</button>
                    </li>
                    <li className="footer__menu-item">
                        <button to="/" className="footer__menu-link">Tokenomics</button>
                    </li>
                    <li className="footer__menu-item">
                        <button to="/" className="footer__menu-link">FAQ</button>
                    </li>
                </ul>
                <div className="footer__bottom">
                    <p className="footer__copyright">© 2022 Floki Gainz. All rights reserved</p>
                    <Social className="social--footer footer__social" />
                </div>
            </div>
        </footer>
    )
}
