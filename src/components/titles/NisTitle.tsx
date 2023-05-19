import { styled } from 'styled-components';

const MiddleChar = styled.span`
  font-size: 40px;
  color: ${(props) => props.color};
  line-height: 48px;
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


