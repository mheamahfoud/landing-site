import { styled } from "styled-components";
import "./style.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { paragraphs } from "./paragraphs";
import ImageBackgroundSrc from "../../../../assets/images/background-services.png";
import {
  desktop,
  laptop,
  tablet,
  xxxxSmallMobile,
} from "../../../../responsive";
import { DubbingAlbumPath } from "../../../../routing/RouteNames";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  background-image: url(${ImageBackgroundSrc});
  background-repeat: no-repeat;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: alpha(opacity=100);
  background-color: transparent;
  background-position: center center;
  background-size: contain;

  ${desktop({ margin: "20px 0" })}
  ${laptop({ margin: "20px 0" })}
  ${tablet({ margin: "20px 0" })}
`;

const ParagraphContainer = styled.div`
  margin: 15px 0;
  opacity: 0;
  transform: scale(0.4);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  ${xxxxSmallMobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

const RightSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateParagraphs = () => {
        const paragraphElements = Array.from(
          sectionRef.current?.querySelectorAll(".section-paragraph") ?? []
        );

        paragraphElements.forEach((paragraph, index) => {
          setTimeout(() => {
            paragraph.classList.add("animate");
          }, index * 1000); // Adjust the delay as needed
        });
      };

      animateParagraphs();
    }
  }, [isVisible]);

  const handleClick = useCallback((id: number) => {
    navigate(DubbingAlbumPath, {
      state: {
        url: paragraphs.find((x) => x.id == id)?.coverSrc,
        id: id,
      },
    });
  }, []);
  return (
    <Container
      ref={sectionRef}
      className={`d-flex flex-column  flex-fill-item section ${
        isVisible ? "visible" : ""
      }`}
    >
      {paragraphs.map(({ id, paragraph }) => (
        <ParagraphContainer
          onClick={() => handleClick(id)}
          key={id}
          className={`d-flex flex-gap-item section-paragraph justify-content-center align-items-center`}
        >
          {paragraph}
        </ParagraphContainer>
      ))}
    </Container>
  );
};

export default RightSection;
