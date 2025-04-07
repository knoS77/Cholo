import React from "react";
import ru from "../../language/ru.json";
import en from "../../language/en.json";
import "./Footer.css";
import { LanguageContext } from "../Header/Header.jsx";

const Footer = () => {
const {language} = React.useContext(LanguageContext)
const translations = {ru: ru, en: en};
    return(
        <footer id="footer">
            <div className="footer__container">
                <h4>
                    {translations[language].design}
                </h4>
            </div>
        </footer>
        // <footer id="footer">
        //     <div className="footer__container">
        //         <div className="wave-container">
        //             <svg className="wave" viewBox="0 0 1440 320">
        //                 <path fill="#0099FF" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,106,864,101.3C960,96,1056,128,1152,165.3C1248,203,1344,245,1392,266.7L1440,288L1440,320L0,320Z"></path>
        //             </svg>
        //             <div className="text-container">
        //                 <h4>{translations[language].design}</h4>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
    )
}

export default Footer;