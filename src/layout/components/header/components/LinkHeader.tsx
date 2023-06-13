import { styled } from "styled-components";
import './linkHeader.css'
import { mobileHeader } from "../responsive";
import { getConfig } from "../../../../i18n/Metronici18n";
//menu-active
const Container = styled.div`
  position: relative;
  letter-spacing: 2px;

`;

const TagLink = styled.a`
  cursor: pointer;
`;

const TitleLink = styled.div`
  width: auto;
  min-height: 16px;
  position: relative;
  top: 13px;
  color: #f15722;
  text-align: center;
  font-weight: 400;
  white-space: nowrap;
  padding: 0 10px;
  word-wrap: normal;
  &:hover {
    border-style: solid;
    border-color: #f15722;
    border-width: 0px 0px 1px;
    width: auto;
  }
  
`;

const LinkHeader = ({ ...props }) => {
  const { active, title, onClick, value, to } = props;
  return (
    <Container onClick={() => onClick(value, to)} className="fs-md-7 fs-sm-12" >
      <TagLink className={`nonblock nontext sdsa  clearfix `}>
        <TitleLink className={`fw-bold NoWrap ${active ? "menu-active" : ""}`}>
          {title}
        </TitleLink>
      </TagLink>
    </Container>
  );
};
export default LinkHeader;
