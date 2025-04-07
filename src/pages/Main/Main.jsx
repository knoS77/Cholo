import React from "react";
import "./Main.css"
import ru from "../../language/ru.json";
import en from "../../language/en.json";
import picture from "../../img/heroImg 1.png";
import pictureOne from "../../img/sc2Block1.png";
import pictureTwo from "../../img/sc2Block2.png";
import pictureThree from "../../img/sc2Block3.png";
import sendPayOne from "../../img/SendPay 1.png";
import sendPayTwo from "../../img/sc3BlockTitle1.png";

import commerece from "../../img/e-commerece.png";

import beatsOne from "../../img/betsOne.png";
import beatsTwo from "../../img/beatsTwo.png";

import instagram from "../../img/instagram.png";
import vk from "../../img/vk.png";
import telegram from "../../img/telegram.png";

import { LanguageContext } from "../Header/Header.jsx";



const Main = () => {
const {language} = React.useContext(LanguageContext);
const translations = {ru: ru, en: en}

const blockTwo = [
    {
        id: 1,
        img: pictureOne,
        title: translations[language].jiraDev,
        text: "(Java, JavaScript, REST APIs)"
    },
    {
        id: 2,
        img: pictureTwo,
        title: translations[language].Agile,
        text: "(Scrum, Kanban, XP)"
    },
    {
        id: 3,
        img: pictureThree,
        title: translations[language].specialist,
        text: "(Atlassian Suite, GitHub, Jenkins)"
    }
];

const blockFour = [
    {
        id: 1,
        img: instagram,
        text: "Instagram",
        url: "https://www.instagram.com/cholo_int/"
    },
    {
        id: 2,
        img: vk,
        text: "VK",
        url: "https://m.vk.com/cholo_int"
    },
    {
        id: 3,
        img: telegram,
        text: "Telegram",
        url: "https://t.me/cholo_int"
    }
];


    return(
        <main>
            <div className="main__container">
                <section id="one">
                    <div className="one__container">
                    <div className="one__block">
                        <div className="one__hi">
                            {translations[language].Hi}
                            <p>{translations[language].Iam} </p>
                            <p>{translations[language].Jira}</p>
                        </div>
                        <div className="one__text">
                            <p>
                                {translations[language].headerText}
                            </p>
                        </div>
                    </div>
                    <div className="one__picture">
                        <img src={picture} alt="" />
                    </div>
                    </div>
                </section>

                <section id="two">
                    <h3>
                        {translations[language].My} <span>{translations[language].Hobby}</span>
                    </h3>
                    <div className="two__container">
                        {blockTwo.map((block) => (
                            <div key={block.id} className="two__block"> 
                                 <div className="two__block-img">
                                    <img src={block.img} alt=""/>
                                </div>
                                <div className="two__block-title">
                                    {block.title}
                                </div>
                                <div className="block__two-text">
                                    {block.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="three">
                        <h3>
                            {translations[language].Portfolio}
                        </h3>
                    <div className="three__container">
                        <div className="three__block">
                            <div className="three__block-title">
                                <img src={sendPayTwo} alt="" /> <span>Sendpay</span>
                            </div>
                            <div className="three__block-img">
                                <img src={sendPayOne} alt="" />
                            </div>
                        </div>
                        <div className="three__block">
                            <div className="three__block-title">
                             E-Commerece 
                             <p>Website</p>
                            </div>
                            <div className="three__block-img">
                                <img src={commerece} alt="" />
                            </div>
                        </div>
                        <div className="three__block">
                            <div className="three__block-title">
                                <img src={beatsOne} alt="" />
                            </div>
                            <div className="three__block-img">
                                <img src={beatsTwo} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="four">
                    <h3>
                        {translations[language].ContactMe}
                    </h3>
                        <div className="four__container">
                {blockFour.map(block => (
                    <a key={block.id} href={block.url} target="_blank" rel="noopener noreferrer">
                        <div className="four__block">
                            <div className="four__block-img">
                                <img src={block.img} alt={`${block.text} icon`} />
                            </div>
                            <div className="four__block-text">
                                <p>{block.text}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
                </section>
            </div>
        </main>
    )
}

export default Main;