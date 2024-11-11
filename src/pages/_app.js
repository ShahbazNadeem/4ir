// _app.js
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
import "@/css/pages/about.css";
import "@/css/pages/services.css";
import "@/css/pages/startegic-counselling.css";
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import CustomCursor from "@/Componenets/custom-Cursor/Custom-Cursor";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}
