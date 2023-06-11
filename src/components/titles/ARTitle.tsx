import styled from 'styled-components';
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../responsive";
interface Props {
    title: string | undefined;
    nisTitle?: boolean;
}
const MiddleChar = styled.span`
  ${desktop({ fontSize: '30px', lineHeight: '36px' })}
  ${laptop({ fontSize: '30px', lineHeight: '36px' })}
  ${tablet({ fontSize: '30px', lineHeight: '36px' })}
  ${mobile({ fontSize: '24px', lineHeight: '29px' })}
  ${smallMobile({ fontSize: '24px', lineHeight: '29px' })}
  ${xSmallMobile({ fontSize: '22px', lineHeight: '26px' })}
  ${xXSmallMobile({ fontSize: '20px', lineHeight: '24px' })}
  ${xxxSmallMobile({ fontSize: '18px', lineHeight: '22px' })}
  ${xxxxSmallMobile({ fontSize: '18px', lineHeight: '22px' })}
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
