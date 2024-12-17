import { useRouter } from "next/router";
import { useEffect } from "react";
import LandingLayout from "./LandingLayout";
import DefaultLayout from "./DefaultLayout";
import"bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "remixicon/fonts/remixicon.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "swiper/swiper-bundle.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isLandingRoute = router.pathname.startsWith("/landing/ai-talk-assist");
  const leadgeneration = router.pathname.startsWith("/landing/leadgeneration");
  const Layout = isLandingRoute ? LandingLayout : DefaultLayout;
  useEffect(() => {
    if (router) {
      if(isLandingRoute){
        import ('@/css/Global.css');
        import ("@/LandingComponent/widgets.css");
        import ("./landing/ai-talk-assist/leadgeneration.css");
        require('bootstrap/js/index.esm');
      }else if(leadgeneration){
        import ('@/css/Global.css');
        import ("@/LandingComponent/widgets.css");
        import ("./landing/leadgeneration/aivoiceCalling.css");
        import ("../Componenets/landing/sllider/slider.css");
        require('bootstrap/js/index.esm');
      }else{

      }

    } else {
      import("@/css/pages/about.css");
      import("@/css/pages/ai-talk-assist.css");
      import("@/css/landing_mic.css.css");
      import("@/css/landing.css");
      import("@/css/pages/services.css");
      import("@/css/pages/startegic-counselling.css");
      import("swiper/css");
      import("swiper/swiper-bundle.css");
      import("@/css/style.css");
      import("@/css/pages/home.css");
    }
  }, [router.pathname]);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}