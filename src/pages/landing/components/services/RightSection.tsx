import { styled } from "styled-components";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { paragraphs } from "./paragraphs";
const Container = styled.div`
  background-image: url(https://www.nistudio.net/images/wave-2-u2312-fr.png?crc=298485572);
  background-repeat: no-repeat;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  /* position: relative; */
  filter: alpha(opacity=100);
  background-color: transparent;
  background-position: center center;
  /* margin-right: -10000px; */
  /* opacity: 1; */
  background-size: contain;
`;
const ParagraphContainer = styled.div`
  margin: 15px 0;
  opacity: 0;
  transform: scale(0.4);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
`;
const RightSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
  return (
    <Container
      ref={sectionRef}
      className={`d-flex flex-column  flex-fill-item section ${
        isVisible ? "visible" : ""
      }`}
    >
      {paragraphs.map(({ id, paragraph }) => (
        <ParagraphContainer
          key={id}
          className={`d-flex flex-gap-item section-paragraph`}
        >
          {paragraph}
        </ParagraphContainer>
      ))}
    </Container>
  );
};

export default RightSection;
