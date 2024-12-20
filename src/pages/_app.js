import { useRouter } from "next/router";
import { useEffect } from "react";
import LandingLayout from "./LandingLayout";
import DefaultLayout from "./DefaultLayout";

// Global dependencies
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "remixicon/fonts/remixicon.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "swiper/swiper-bundle.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Identify the route for conditional layout
  const isLandingRoute = router.pathname.startsWith("/landing");
  const Layout = isLandingRoute ? LandingLayout : DefaultLayout;

  useEffect(() => {

    const importCSS = async () => {
      require("bootstrap/js/index.esm");
    if (isLandingRoute) {
     await import ("@/css/Global.css");
     await import("@/LandingComponent/widgets.css");
      if (router.pathname.startsWith("/landing/ai-talk-assist")) {
        await  import("./landing/ai-talk-assist/aitalkassist.css");
      } else if (router.pathname.startsWith("/landing/leadgeneration")) {
        await import("./landing/leadgeneration/leadgeneration.css");
        await import("../Componenets/landing/sllider/slider.css");
      }
    } else {
      // Fallback for other pages
      await import("@/css/pages/about.css");
      await import("@/css/pages/ai-talk-assist.css");
      await import("@/css/landing_mic.css.css");
      await import("@/css/landing.css");
      await import("@/css/pages/services.css");
      await import("@/css/pages/startegic-counselling.css");
      await import("@/css/style.css");
      await import("@/css/pages/home.css");
    }
  }
  importCSS();
  }, [router.pathname]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
