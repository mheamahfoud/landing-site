import { styled } from "styled-components";
import { desktop ,laptop,mobile,smallMobile,tablet, xSmallMobile, xXSmallMobile} from "../../../responsive";
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
  ${xSmallMobile({ fontSize:'200px' })}
  ${xXSmallMobile({ fontSize:'200px' })}
`;