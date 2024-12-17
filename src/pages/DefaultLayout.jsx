import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCursor from "@/Componenets/custom-Cursor/Custom-Cursor";

export default function DefaultLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <CustomCursor />
      <div className="default-layout">{children}</div>
    </>
  );
}