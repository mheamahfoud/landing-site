import { Outlet } from "react-router-dom";
import "./index.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import React, { useEffect } from "react";
import { MenuItems } from "./components/header/util/constant";
import { useAuth } from "../ContextProvider";
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

  return (
    <>
      <Header />
      {/* <div className="slider-wrapper">
        <Slider />
      </div> */}

      <div className="content">
        <Outlet />
      </div>
      <section id="contact-us">
        <Footer />
      </section>
    </>
  );
};
