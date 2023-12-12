
import "@/styles/globals.css";
import Layout from "./components/Layout";
import "./styles.css";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "@/context/ThemeContext";
import FacebookPixel from "@/utils/FacebookPixel";
import { CartProvider } from "@/context/CartContext";
import { AuthContextProvider } from "@/context/AuthContext";


export default function App({ Component, pageProps }) {
  
  return (
    <>    
    <ThemeProvider>
    <AuthContextProvider>
    <CartProvider>
    <Layout>
      <Component {...pageProps} />
      <FacebookPixel/>
      <ScrollToTop />
    </Layout>
    </CartProvider>
    </AuthContextProvider>
    </ThemeProvider>
    </>

  );
}
