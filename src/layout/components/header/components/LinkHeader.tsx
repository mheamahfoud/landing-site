import { styled } from "styled-components";
import './linkHeader.css'
//menu-active
const Container = styled.div`
  position: relative;
  font-size: 13px;
`;

const TagLinnk = styled.a`
  cursor: pointer;
`;

const TitleLink = styled.div`
  width: auto;
  min-height: 16px;
  position: relative;
  top: 13px;
  font-size: 13px;
  letter-spacing: 2px;
  color: #f15722;
  text-align: center;
  line-height: 16px;
  font-family: roboto, sans-serif;
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
    <Container onClick={() => onClick(value, to)}>
      <TagLinnk className={`nonblock nontext  clearfix `}>
        <TitleLink className={`NoWrap ${active ? "menu-active" : ""}`}>
          {title}
        </TitleLink>
      </TagLinnk>
    </Container>
  );
};
export default LinkHeader;
