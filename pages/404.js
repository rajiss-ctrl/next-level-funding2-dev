import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React from 'react';
import Footer from './components/Footer';

const Custom404 = () => {
  const {theme} = useTheme()
  return (
    <div className={`${theme === 'light' ? "bg-black" : "bg-white"} pt-36  flex items-center justify-center flex-col `}>
        <div  className={`${theme === 'light' ? "text-white" : "text-black"} py-24 flex flex-col items-center justify-center`}>
        <h1 className={`text-3xl font-bold `}>Oops! Page Not Found!</h1>
        <p className='px-[28rem] pb-8 text-[1.2rem] text-center'>We are very sorry for inconviniece. It looks like you&apos;re trying to access a page that has been deleted or never even existed</p>
        <Image src="/assets/404.png" width={500} height={500} alt=""/>
        </div>
      <div className=' px-16'>
        <Footer/>
      </div>
    </div>
  );
};

export default Custom404;
