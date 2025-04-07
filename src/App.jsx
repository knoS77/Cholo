import React, {useState} from 'react';
import './App.css';
import Header from './pages/Header/Header.jsx';
import Main from './pages/Main/Main.jsx';
import Footer from './pages/Footer/Footer.jsx';
import {LanguageContext} from "./pages/Header/Header.jsx"


const App = () => {
  // Состояние для выбранного языка
  const [language, setLanguage] = useState("ru");

  // Функция для изменения языка
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };
  return(
    <>
    <LanguageContext.Provider value={{ language, changeLanguage }}>
        <Header />
        <Main/>
        <Footer/>
    </LanguageContext.Provider>
    </>
  )
}

export default App;