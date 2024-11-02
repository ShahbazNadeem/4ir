import "bootstrap/dist/css/bootstrap.css";
import "@/css/style.css";
import "@/css/pages/ai-talk-assist.css";
import "@/css/landing_mic.css.css";
import "@/css/landing.css";
import "@/css/pages/home.css";
import 'remixicon/fonts/remixicon.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
    return<Component {...pageProps} />
  }