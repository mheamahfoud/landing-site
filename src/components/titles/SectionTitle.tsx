import { styled } from "styled-components";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import NisTitle from "./NisTitle";
import { SectionNUmber } from "./styles/SectionNumber";
interface StyleProps {
  color?: string;
}
interface props {
  sectionNumber: string | undefined;
  title: string | undefined;
  nisTitle?: boolean;
}
const Container = styled.div<StyleProps>`
  text-align: center;
  color: #7f7f7f;
  background-color: transparent;
  position: relative;
  font-family: raleway, sans-serif;
  font-weight: 900;
  position: relative;
  width: 320px;
  height: 250px;
`;

const Title = styled.p`
  position: relative;
  background: white;
  z-index: 2;
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 101%;
  height: 30%;
`;
const FirstChar = styled.span`
  font-size: 40px;
  color: ${(props) => props.color};
  line-height: 48px;
`;
const MiddleChar = styled.span`
  font-size: 30px;
  color: ${(props) => props.color};
  line-height: 36px;
`;

const SectionTitle = (props: props) => {
  const { sectionNumber, title, nisTitle } = props;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  
  useEffect(() => {
    const options = {
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
    if (isVisible && !hasAnimated) {

      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);


  return (
    <Container>
      <SectionNUmber>
        <p>{sectionNumber}</p>
      </SectionNUmber>

      <div>
        <Title
          className={`title-section ${hasAnimated ? 'animated' : ''}`}
          ref={sectionRef}>
          {nisTitle && <NisTitle />}{" "}
          {title.split(" ").map((word) => {
            return (
              <>
                <FirstChar>{word.charAt(0)}</FirstChar>
                <MiddleChar>{word.slice(1)} </MiddleChar>
              </>
            );
          })}
        </Title>
      </div>
    </Container>
  );
};

export default SectionTitle;
