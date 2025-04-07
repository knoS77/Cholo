import React, { useContext } from "react";
import ru from "../../language/ru.json";
import en from "../../language/en.json";
import "./Header.css";

export const LanguageContext = React.createContext();


const Header = () => {
const [state, setState] = React.useState(false);
const { language, changeLanguage } = useContext(LanguageContext);

const changeBurgerMenu = (event) => {
    if (event.target.closest('.burger')){
        setState(!state);
        event.preventDefault();
    } else {
        setState(false)
    }
}
// Объект с переводами
const translations = { ru: ru, en: en };
    return(
        <header>
            <div onClick={changeBurgerMenu} className="header__container">
                <div className="header__logo">
                    Cholo<span>Sloyan</span>
                </div>
                {/* <nav className="header__nav"> */}
                <nav id="nav" className={`header__nav ${state ? "active" : ""}`}>
                    <ul className="nav__list">
                    <select id="language-select" value={language} onChange={(e) => changeLanguage(e.target.value)}>
                        <option value="ru">Russian</option>
                        <option value="en">English</option>
                    </select>
                        <li>
                            <a href="#one">
                                {translations[language].AboutUs}
                            </a>
                        </li>
                        <li>
                            <a href="#two">
                                {translations[language].Hobbies}
                            </a>
                        </li>
                        <li>
                            <a href="#three">
                                {translations[language].Portfolio}
                            </a>
                        </li>

                        <a href="#footer">
                            <button className="header__button">
                                {translations[language].ContactMe}
                            </button>
                        </a>
                        
                    </ul>
                </nav>
                    <div id="burger" className="burger">
                        <span></span>
                    </div>
            </div>
        </header>
    )
}

export default Header;