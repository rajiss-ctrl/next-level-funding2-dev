
import "@/styles/globals.css";
import Layout from "./components/Layout";
import "./styles.css";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "@/context/ThemeContext";


export default function App({ Component, pageProps }) {
  
  return (
    <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
    </ThemeProvider>

  );
}
