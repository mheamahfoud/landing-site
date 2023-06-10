import { styled } from "styled-components";
import SectionTitle from "../../../../components/titles/SectionTitle";
import { Carousel } from "./Carousel";
import {
  desktop,
  laptop,
  tablet,
  mobile,
  xSmallMobile,
  xXSmallMobile,
  smallMobile,
  xxxSmallMobile,
  xxxxSmallMobile,
  tabletColumn,
} from "../../../../responsive";
import { useIntl } from "react-intl";

const Container = styled.div`
  ${tabletColumn({ flexDirection: "column" })}
  ${xxxxSmallMobile({flexDirection: "column" ,alignItems:'center'})}
  margin: 20px 0;
`;

const Left = styled.div``;
const Right = styled.div`
 height: 100%;
  margin: 0 auto;
  ${desktop({ maxWidth: "810px"})}
  ${laptop({ maxWidth: "710px",})}
  ${tablet({ maxWidth: "710px" })}
  ${mobile({ maxWidth: "710px", padding: "0" })}
  ${smallMobile({ maxWidth: "610px", padding: "0" })}
  ${xSmallMobile({ maxWidth: "550px", padding: "0" })}
  ${xXSmallMobile({ maxWidth: "520px", padding: "0" })}
  ${xxxSmallMobile({ maxWidth: "350px", padding: "0" })}
  ${xxxxSmallMobile({ maxWidth: "250px", padding: "0" })}

`;

const index = () => {
  const intl=useIntl();
  return (
    <Container className="d-flex justify-content-between">
      <Left className="d-flex">
        <SectionTitle title={intl.formatMessage({id:'about_us'})} sectionNumber="01" />
      </Left>
      <Right >
        <Carousel />
      </Right>
    </Container>
  );
};

export default index;
