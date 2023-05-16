import { styled } from "styled-components";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import NisTitle from "./NisTitle";
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
  position: "relative";
`;
const SectionNUmber = styled.div`
  min-height: 139px;
  font-size: 250px;
  text-align: center;
  color: #7f7f7f;
  background-color: transparent;
  opacity: 0.08;
  font-family: raleway, sans-serif;
  filter: alpha(opacity=8);
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=8)";
  font-weight: 900;
  position: relative;
  line-height: 0.9;
  width: 316px;
`;
const Title = styled.p`
  position: relative;
  background: white;
  z-index: 148;
  position: absolute;
  width: 316px;
  bottom: 0;
  margin: 0;
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
      // Apply the fade-in effect here
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
