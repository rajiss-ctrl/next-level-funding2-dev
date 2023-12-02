
import "@/styles/globals.css";
import Layout from "./components/Layout";
import "./styles.css";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "@/context/ThemeContext";
import FacebookPixel from "@/utils/FacebookPixel";


export default function App({ Component, pageProps }) {
  
  return (
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
      <FacebookPixel/>
      <ScrollToTop />
    </Layout>
    </ThemeProvider>

  );
}
