import { styled } from 'styled-components';
import { xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from '../../responsive';

const MiddleChar = styled.span`
  font-size: 40px;
  color: ${(props) => props.color};
  line-height: 48px;
  ${xSmallMobile({fontSize:'30px'})}
  ${xXSmallMobile({fontSize:'25px'})}
  ${xxxSmallMobile({fontSize:'22px'})}
  ${xxxxSmallMobile({fontSize:'22px'})}
`
export default function NisTitle() {
  return (
    <>
      <MiddleChar color={'#F15722'}>
        NiS
      </MiddleChar>

    </>
  )
}


