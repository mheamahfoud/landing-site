import { Outlet } from "react-router-dom";
import "./index.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { useEffect } from "react";
import { MenuItems } from "./components/header/util/constant";
import { useAuth } from "../ContextProvider";
import { useLang } from "../i18n/Metronici18n";
export const MasterLayout = () => {
  const { setCurrentPage, linkClicked } = useAuth();

  useEffect(() => {
    // Event listener to handle scroll event
    const handleScroll = () => {
      if (!linkClicked) {
        const sections = document.querySelectorAll("section");
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const sectionId = section.getAttribute("id");
          const sectionRect = section.getBoundingClientRect();

          if (sectionRect.top <= 0 && sectionRect.bottom >= 0) {
            const linkId = MenuItems.find((x) => x.key == sectionId)?.id;
            if (linkId) {
              setCurrentPage(linkId);
            }

            break;
          }
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [linkClicked]);
  const lang = useLang();
  return (
    <div style={{direction:lang=='ar'?'rtl':'ltr'}}>
      <Header />
      {/* <div className="slider-wrapper">
        <Slider />
      </div> */}

      <div className="content">
        <Outlet />
      </div>

      <Footer />

    </div>
  );
};
