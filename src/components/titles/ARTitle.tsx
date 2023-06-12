import styled from 'styled-components';
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../responsive";
interface Props {
    title: string | undefined;
    nisTitle?: boolean;
}
const MiddleChar = styled.span`
  ${desktop({ fontSize: '40px', lineHeight: '36px' })}
  ${laptop({ fontSize: '40px', lineHeight: '36px' })}
  ${tablet({ fontSize: '40px', lineHeight: '36px' })}
  ${mobile({ fontSize: '30px', lineHeight: '29px' })}
  ${smallMobile({ fontSize: '30px', lineHeight: '29px' })}
  ${xSmallMobile({ fontSize: '25px', lineHeight: '26px' })}
  ${xXSmallMobile({ fontSize: '25px', lineHeight: '24px' })}
  ${xxxSmallMobile({ fontSize: '20px', lineHeight: '22px' })}
  ${xxxxSmallMobile({ fontSize: '20px', lineHeight: '22px' })}
  color: ${(props) => props.color};
`;
const ARTitle = (props: Props) => {
    const { title} = props;
    return (
        <>
            {title.split(" ").map((word) => {
                return (
                    <>
                        <MiddleChar>{word} </MiddleChar>
                    </>
                );
            })}
        </>
    );
}

export default ARTitle;
