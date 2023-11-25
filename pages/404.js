import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React from 'react';
import Footer from './components/Footer';

const Custom404 = () => {
  const {theme} = useTheme()
  return (
    <div className={`${theme === 'light' ? "bg-black" : "bg-white"} overflow-hidden  pt-36  flex items-center justify-center flex-col w-full `}>
        <div  className={`${theme === 'light' ? "text-white" : "text-black"} py-10 md:py-24 flex flex-col items-center justify-center`}>
        <h1 className={`md:text-3xl lg:text-3xl font-bold `}>Oops! Page Not Found!</h1>
        <p className='px-5 md:px-[10rem] lg:px-[12rem] xl:px-[20rem]  pb-8 text-sm md:text-[1.2rem] text-center'>We are very sorry for inconviniece. It looks like you&apos;re trying to access a page that has been deleted or never even existed</p>
        <Image src="/assets/404.png" width={500} height={500} alt="nextlevelfunding 404" className='px-2 md:px-0'/>
        </div>
      <div className='px-5 md:px-16'>
        <Footer/>
      </div>
    </div>
  );
};

export default Custom404;
