import { styled } from "styled-components";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import NisTitle from "./NisTitle";
import { SectionNUmber } from "./styles/SectionNumber";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../responsive";
import { useLang } from "../../i18n/Metronici18n";
import ENTitle from "./ENTitle";
import ARTitle from "./ArTitle";

interface StyleProps {
  color?: string;
}
interface props {
  sectionNumber: string | undefined;
  title: string | undefined;
  nisTitle?: boolean;
}
const Container = styled.div<StyleProps>`
  text-align: start;
  color: #7f7f7f;
  background-color: transparent;
  position: relative;
  font-family: raleway, sans-serif;
  font-weight: 900;
  position: relative;
  ${desktop({ width: '340px', height: '250px' })}
  ${laptop({ width: '340px', height: '250px' })}
  ${tablet({ width: '340px', height: '250px' })}
  ${mobile({ width: '306px', height: '200px' })}
  ${smallMobile({ width: '270px', height: '200px' })}
  ${xSmallMobile({ width: '250px', height: '200px' })}
  ${xXSmallMobile({ width: '170px', height: '200px' })}
  ${xxxSmallMobile({ width: '170px', height: '150px' })}
  ${xxxxSmallMobile({ width: '170px', height: '150px' })}
`;

const Title = styled.p`
  position: relative;
  background: white;
  z-index: 2;
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
  height: 30%;
  text-align:center;
  ${xxxSmallMobile({ textAlign: 'center' })}
  ${xxxxSmallMobile({ textAlign: 'center' })}
`;


const SectionTitle = (props: props) => {
  const lang = useLang();
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
          className={`title-section ${hasAnimated ? 'animated' : ''} fs-md-1`}
          ref={sectionRef}>
          {lang == 'ar' ? <ARTitle title={title} nisTitle={nisTitle} /> : <ENTitle title={title} nisTitle={nisTitle} />}
        </Title>
      </div>
    </Container>
  );
};

export default SectionTitle;
