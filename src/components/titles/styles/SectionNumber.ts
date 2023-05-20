import { styled } from "styled-components";
import { desktop ,laptop,mobile,smallMobile,tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile} from "../../../responsive";
export const SectionNUmber = styled.div`
  opacity: 0.08;
  line-height: 1;
  width: 100%;
  height: 100%;
  ${desktop({fontSize:'250px' })}
  ${laptop({fontSize:'250px' })}
  ${tablet({fontSize:'250px' })}
  ${mobile({ fontSize:'200px' })}
  ${smallMobile({ fontSize:'200px' })}
  ${xSmallMobile({ fontSize:'189px' })}
  ${xXSmallMobile({ fontSize:'150px' })}
  ${xxxSmallMobile({ fontSize:'125px' })}
  ${xxxxSmallMobile({ fontSize:'125px' })}
`;