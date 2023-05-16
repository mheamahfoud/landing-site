import { styled } from "styled-components";
import "./style.css";
interface StyleProps {
  color?: string;
} 

const Container =styled.div<StyleProps>`
  text-align: center;
  color: #7f7f7f;
  background-color: transparent;
  position: relative;
  font-family: raleway, sans-serif;
  font-weight: 900;
`;
const SectionNUmber = styled.div`
  z-index: 147;
  width: 370px;
  min-height: 97px;
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
`;
const Title = styled.p`
  position: relative;
  bottom: 50px;
  background: white;
  z-index: 148;
`;
const FirstChar = styled.span`
  font-size: 40px;
  line-height: 48px;
  color: 'red';
`;
const MiddleChar = styled.span`
  font-size: 30px;
  line-height: 36px;
  color: ${(props) => props.color};
`;
const DubbingService = () => {



  return (
    <Container>
      <SectionNUmber>
        <p>{'02'}</p>
      </SectionNUmber>

      <Title  className={"slide-in"}>
       
          return (
            <>
              <FirstChar  color={'#F15722'}>{'N'}</FirstChar>
              <MiddleChar color={'#F15722'}>{'i'} </MiddleChar>
              <FirstChar color={'#F15722'}>{'S'}</FirstChar>
              <FirstChar>{'D'}</FirstChar>
              <MiddleChar>{'usdsabbing'} </MiddleChar>
              <FirstChar>{'S'}</FirstChar>
              <MiddleChar>{'ervices'} </MiddleChar>
            </>
          );
     
      </Title>
    </Container>
  );
};

export default DubbingService;
