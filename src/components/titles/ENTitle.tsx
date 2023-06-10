import React from 'react';
import NisTitle from './NisTitle';
import styled from 'styled-components';
import { desktop, laptop, mobile, smallMobile, tablet, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../responsive";
interface Props {
    title: string | undefined;
    nisTitle?: boolean;
}
const FirstChar = styled.span`
  ${desktop({ fontSize: '40px', lineHeight: '48px' })}
  ${laptop({ fontSize: '40px', lineHeight: '48px' })}
  ${tablet({ fontSize: '40px', lineHeight: '48px' })}
  ${mobile({ fontSize: '28px', lineHeight: '34px' })}
  ${smallMobile({ fontSize: '28px', lineHeight: '34px' })}
  ${xSmallMobile({ fontSize: '26px', lineHeight: '31px' })}
  ${xXSmallMobile({ fontSize: '24px', lineHeight: '29px' })}
  ${xxxSmallMobile({ fontSize: '22px', lineHeight: '26px' })}
  ${xxxxSmallMobile({ fontSize: '22px', lineHeight: '26px' })}
  color: ${(props) => props.color};
`;
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
const ENTitle = (props: Props) => {
    const { title, nisTitle } = props;
    return (
        <>
            {nisTitle && <NisTitle />}{" "}
            {title.split(" ").map((word) => {
                return (
                    <>
                        <FirstChar>{word.charAt(0)}</FirstChar>
                        <MiddleChar>{word.slice(1)} </MiddleChar>
                    </>
                );
            })}
        </>
    );
}

export default ENTitle;
