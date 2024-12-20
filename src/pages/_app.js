import { useRouter } from "next/router";
import { useEffect, useState, lazy } from "react";
// import Logo from "../../public/assets/images/4IR-logo-main.png";
// Lazy load layouts
const LandingLayout = lazy(() => import("./LandingLayout"));
const DefaultLayout = lazy(() => import("./DefaultLayout"));

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
  const [loading, setLoading] = useState(true); // Add loading state

  // Determine layout based on route
  const isLandingRoute = router.pathname.startsWith("/landing");
  const Layout = isLandingRoute ? LandingLayout : DefaultLayout;

  useEffect(() => {
    const importCSS = async () => {
      require("bootstrap/js/index.esm");

      if (isLandingRoute) {
        await import("@/css/Global.css");
        await import("@/LandingComponent/widgets.css");

        if (router.pathname.startsWith("/landing/ai-talk-assist")) {
          await import("./landing/ai-talk-assist/aitalkassist.css");
        } else if (router.pathname.startsWith("/landing/leadgeneration")) {
          await import("./landing/leadgeneration/leadgeneration.css");
          await import("../Componenets/landing/sllider/slider.css");
        }
      } else {
        // CSS for other pages
        await import("@/css/pages/about.css");
        await import("@/css/pages/ai-talk-assist.css");
        await import("@/css/landing_mic.css.css");
        await import("@/css/landing.css");
        await import("@/css/pages/services.css");
        await import("@/css/pages/startegic-counselling.css");
        await import("@/css/style.css");
        await import("@/css/pages/home.css");
      }

      setLoading(false); // Set loading to false after imports
    };

    importCSS();
  }, [isLandingRoute, router.pathname]);

  return (
    <>
      {loading ? (
        // Loader with a rotating image
        <div className="loader">
          <img src='/assets/images/4IRonlyLogo.png' alt="Loading" className="loader-img" />
          <style jsx>{`
            .loader {
              display: flex ;
              justify-content: center;
              align-items: center;
              width: 100vw;
              height: 100vh;
              background: linear-gradient(0deg, #0a0e17, #0a0e17), linear-gradient(179.9deg, #0a5b75 -47.93%, #02111a 98.07%);
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1000;
            }

            .loader-img {
              width: 150px; /* Adjust to your preferred size */
              height: auto;
              animation: rotate 2s linear infinite, fadeIn 1s ease-in-out infinite; /* Rotate image and fade it in */
            }

            @keyframes fadeIn {
              0%, 100% {
                opacity: 0.5;
              }
              50% {
                opacity: 1;
              }
            }

            @keyframes rotate {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      ) : (
        // Render the actual layout and component
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
