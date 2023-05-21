import { styled } from "styled-components";
import { ButtonLinkFadeOut } from "../../../../components/buttons/normal/ButtonLinkFadeOut";

import {
  desktop,
  laptop,
  mobile,
  smallMobile,
  tablet,
  xSmallMobile,
  xXSmallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
} from "../../../../responsive";
import { useCallback } from "react";
import { VisitorInfoPath } from "../../../../routing/RouteNames";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: fit-content;
  border: solid;
  text-align: center;
  background-color: transparent;
  position: relative;
  color: #7f7f7f;
  border-style: solid;
  border-color: #f15722;
  border-width: 1px;
`;
const Title = styled.p`
  margin: 0;
  ${desktop({ fontSize: "28px", lineHeight: "34px", fontWeight: "bold" })}
  ${laptop({ fontSize: "26px", lineHeight: "31px", fontWeight: "bold" })}
  ${tablet({ fontSize: "22px", lineHeight: "26px", fontWeight: "bold" })}
  ${mobile({ fontSize: "16px", lineHeight: "21px", fontWeight: "bold" })}
`;
const Paragraph = styled.p`
  text-indent: 5px;
  margin: 0;
  ${desktop({ fontSize: "20px", lineHeight: "20px" })}
  ${laptop({ fontSize: "16px", lineHeight: "21px" })}
  ${tablet({ fontSize: "16px", lineHeight: "19px" })}
  ${mobile({ fontSize: "16px", lineHeight: "21px" })}
  ${smallMobile({ fontSize: "14px", lineHeight: "14px" })}
  ${xSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
  ${xXSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
  ${xxxSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
  ${xxxxSmallMobile({ fontSize: "10px", lineHeight: "12px" })}
`;
export const VoiceLibrary = () => {
  const navigate = useNavigate();
  const handleClick = useCallback((id: number) => {
    navigate(VisitorInfoPath, {
     // state: { url: VisitorInfoSrc},
    });
  }, []);
  return (
    <Container>
      <Title>Voice Library</Title>
      <Paragraph>Our company owns a huge library of actors voices.</Paragraph>
      <div style={{margin:'10px 0'}}>
        <ButtonLinkFadeOut title={"Add your voice"} onClick={()=>{}} />
      </div>
      <div style={{margin:'10px 0'}}>
        <ButtonLinkFadeOut title={"NiS Specialties"} onClick={() => {}} />
      </div>
    </Container>
  );
};
