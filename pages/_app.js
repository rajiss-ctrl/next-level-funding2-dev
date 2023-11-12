    
require('dotenv').config();
		
import { ThemeProvider } from './context/ThemeContext';
import { ThemeProvider as NextThemeProvider } from 'next-themes';  
import "@/styles/globals.css";
import Layout from "./components/Layout";
import "./styles.css";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="light">
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
    </ThemeProvider>
    </NextThemeProvider>

  );
}




// pages/_app.js
// import { ThemeProvider } from 'next-themes';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider attribute="class">
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;
