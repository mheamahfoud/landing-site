import { styled } from "styled-components";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import NisTitle from "./NisTitle";
import { SectionNUmber } from "./styles/SectionNumber";
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../responsive";
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
  ${desktop({ width: '340px',height:'250px' })}
  ${laptop({ width: '340px',height:'250px' })}
  ${tablet({ width: '340px',height:'250px' })}
  ${mobile({ width: '306px',height:'200px' })}
  ${smallMobile({ width: '260px',height:'200px' })}
  ${xSmallMobile({ width: '260px',height:'120px' })}
  ${xXSmallMobile({ width: '200px',height:'120px' })}
  ${xxxSmallMobile({ width: '200px',height:'120px' })}
  ${xxxxSmallMobile({width: '200px',height:'120px'})}
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
  ${xxxSmallMobile({  textAlign:'center'})}
  ${xxxxSmallMobile({textAlign:'center'})}
`;
const FirstChar = styled.span`
  ${desktop({fontSize:'40px' ,lineHeight:'48px' })}
  ${laptop({fontSize:'40px' ,lineHeight:'48px' })}
  ${tablet({fontSize:'40px'  ,lineHeight:'48px'})}
  ${mobile({ fontSize:'28px'  ,lineHeight:'34px'})}
  ${smallMobile({ fontSize:'28px'  ,lineHeight:'34px'})}
  ${xSmallMobile({ fontSize:'26px'  ,lineHeight:'31px'})}
  ${xXSmallMobile({ fontSize:'24px'  ,lineHeight:'29px'})}
  ${xxxSmallMobile({ fontSize:'22px'  ,lineHeight:'26px'})}
  ${xxxxSmallMobile({ fontSize:'22px'  ,lineHeight:'26px'})}
  color: ${(props) => props.color};
`;
const MiddleChar = styled.span`
  ${desktop({fontSize:'30px' ,lineHeight:'36px' })}
  ${laptop({fontSize:'30px' ,lineHeight:'36px' })}
  ${tablet({fontSize:'30px'  ,lineHeight:'36px'})}
  ${mobile({ fontSize:'24px'  ,lineHeight:'29px'})}
  ${smallMobile({ fontSize:'24px'  ,lineHeight:'29px'})}
  ${xSmallMobile({ fontSize:'22px'  ,lineHeight:'26px'})}
  ${xXSmallMobile({ fontSize:'20px'  ,lineHeight:'24px'})}
  ${xxxSmallMobile({ fontSize:'18px'  ,lineHeight:'22px'})}
  ${xxxxSmallMobile({ fontSize:'18px'  ,lineHeight:'22px'})}
  color: ${(props) => props.color};
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
