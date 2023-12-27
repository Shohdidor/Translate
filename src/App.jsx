import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


import { useState } from 'react'
import './App.css'
import Switcher from './components/Switcher'
import { useTranslation } from 'react-i18next'
import Logo from "/img/logo (3).png"
import Art from "/img/Rectangle (8).png"
import Porovozik from "/img/Rectangle (9).png"
import Photo1 from "/img/Frame (30).png"
import Photo2 from "/img/Frame (31).png"
import Photo3 from "/img/Frame (32).png"

import Haos from "/img/Rectangle (10).png"
import Together from "/img/Rectangle (11).png"
import Reklama from "/img/Group 5 (1).png"
import Kamaz from "/img/Rectangle (12).png"
import Kamaz2 from "/img/Rectangle (13).png"
import Kamaz3 from "/img/Rectangle (14).png"

import End from "/img/Rectangle (15).png"

import Button from '@mui/material/Button';
import Card, { Card2, Card3 , Card4 } from './components/Card'

function App ()  {

  useEffect(() => {
    AOS.init();
  }, [])

  const [ lng , setLng ] = useState ( "en" )
  const { t , i18n } = useTranslation ()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
    <div className='dark:bg-[#0D1D25] text-black dark:text-white h-[575vh] sm:h-[580vh] overflow-hidden'>
      <Switcher />
      <div className='flex justify-around mb-[50px]'>
        <div className='flex items-center justify-around w-[180px]'>
          <img src={Logo} alt="error" className='w-[40px] mt-[-25px] pl-[15px]'/>
          <h1 className='mt-[-25px] font-bold dark:text-orange-500 dark:font-bold'>
            {t("Stroy")}
          </h1>
        </div>

        <ul className='hidden sm:flex sm:justify-between sm:w-[800px] sm:pl-[150px] sm:font-bold sm:mt-[-20px] dark:text-sky-500'>
          <li>
            {t("navbar.Home")}
          </li>
          <li>
            {t("navbar.About")}
          </li>
          <li>
            {t("navbar.Products")}
          </li>
          <li>
            {t("navbar.Process")}
          </li>
          <li>
            {t("navbar.Reliability")}
          </li>
          <li>
            {t("navbar.Clients")}
          </li>
          <li>
            {t("navbar.Connect")}
          </li>
        </ul>


      <select value={lng} 
      className='mt-[-25px] bg-[#C6C6D0] dark:bg-[#0D1D25] dark:text-orange-500'
      onChange={(event) => { changeLanguage ( event . target . value )
        setLng (event.target.value)}}>
        <option value="en">Eng</option>
        <option value="ru">Rus</option>
      </select>

        </div>

      <div className='dark:bg-[#0D1D25]'>

        <h1  className='animate__animated animate__backInUp text-center font-bold w-[350px] pl-[50px] text-[20px] pb-[20px] sm:w-[50%] sm:text-[40px] sm:ml-[360px] sm:mt-[150px] sm:font-black'>
          {t("Smart")}
        </h1>
        <div className='m-auto flex justify-center gap-[10px]'>
        <Button variant="contained" className='dark:bg-orange-500' sx={{background: "#212B31"}}>{t("Button")}</Button>
        <Button variant="outlined" className='dark:text-white' sx={{border : "1px solid gray", color:"#212B31"}}>{t("Button2")}</Button>
        </div>
      </div>

      <img src={Art} className='m-auto pt-[60px] sm:pb-[50px]' alt="error" />
      <img src={Porovozik} className='m-auto' alt="error" />

      <div data-aos="zoom-out-down" className='sm:flex sm:mt-[70px]'>

      <Card img={Photo1} h1={t("Effect")} p={t("miniEffect")}  />
      <Card img={Photo2} h1={t("Effect")} p={t("miniEffect")}  />
      <Card img={Photo3} h1={t("Effect")} p={t("miniEffect")}  />

      </div>

 <Card2 h1={t("Haos")} p={t("miniHaos")} img={Haos} />


      <h1 className='text-center font-bold w-[80%] ml-[50px] sm:text-center sm:w-[100%] sm:ml-0 sm:text-[25px] sm:mt-[80px] dark:text-orange-500'> {t("Text")} </h1>

      <div className='text-center mt-[50px] sm:flex sm:text-left sm:pl-[200px] sm:pr-[150px]'>
        <div className='m-auto'>
          <h1 className='font-black text-[18px] pb-[10px] sm:text-[35px] sm:w-[80%] dark:text-sky-500'>
            {t("Together")}
          </h1>
          <p className='text-[15px] text-gray-600 font-medium pb-[10px] sm:text-[17px] sm:w-[90%] dark:text-orange-500'>

          {t("miniTogether")}

          </p>
          <span className='font-black dark:text-green-600'>
            {t("spanTogether")}
          </span>
        </div>
        <div>
          <img src={Together} alt="error" className='w-[350px] m-auto mt-[20px] sm:w-[1000px]' />
        </div>
      </div>
      <img data-aos="fade-up" src={Reklama} alt="error"  className='mt-[20px] sm:m-auto sm:mt-[50px]'/>

      <h1 className='text-center font-black text-[20px] mt-[40px] mb-[20px] sm:text-[50px] sm:mt-[150px] dark:text-orange-500'>
        {t("Control")}
      </h1>
      <p className='text-center font-medium text-gray-600 sm:text-[20px] sm:w-[50%] sm:ml-[380px] dark:text-sky-500'>
        {t("miniControl")}
      </p>

      <Card3 h1={t("Tema1")} p={t("miniTema1")} img={Kamaz}/>
      <Card4 h1={t("Tema2")} p={t("miniTema2")} img={Kamaz2}/>
      <Card3 h1={t("Tema3")} p={t("miniTema3")} img={Kamaz3}/>


      <div className='bg-[#212B31] p-[10px] pb-[100px]'>
        <Card3 h1={t("End")} p={t("miniEnd")} img={End} />
      </div>
      <h1 className='hidden sm:block dark:sm:text-orange-600 sm:text-center sm:text-[100px] sm:font-black'>
        T<span className='sm:text-white'>h</span>e 
        <span className='sm:text-white'> e</span>n<span className='sm:text-white'>d</span>
      </h1>
    
    </div>
    </>
  )
} 

export default App
