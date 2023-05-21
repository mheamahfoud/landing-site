import React, { FC } from 'react';
import { styled } from 'styled-components';
const Container =styled.div`
    overflow: hidden;
    color: #C4C4C4;
    font-style: italic;
    padding: 6px;
    position: absolute;
    font-family: roboto, sans-serif;
    font-weight: 400;
    position: relative;
`;

const InnerContainer =styled.div`
    color: #C4C4C4;
    line-height: 14px;
    background-color: transparent;
    font-family: roboto, sans-serif;
    z-index: 15;
    position: relative;
    font-weight: 400;
    border-style: solid;
    font-style: italic;
    border-color: #7F7F7F;
    padding: 6px;
    border-width: 0px 0px 2px;

`;

const Input =styled.input`
    padding: 6px;
    color: #C4C4C4;
    font-style: italic;
    min-height: 0px;
    position: absolute;
    font-family: roboto, sans-serif;
    font-weight: 400;
`;

const Label =styled.div`
    overflow: hidden;
    color: #C4C4C4;
    font-style: italic;
    padding: 6px;
    position: absolute;
    font-family: roboto, sans-serif;
    font-weight: 400;
    position: absolute;
    top: 0px;
    left: 0px;
    background: transparent;
    border: none;

`;
interface Props {
    title: string
}

const InputForm: FC<Props> = ({ title }) => {
    return (
        <Container>
            <InnerContainer >
                <Input type="text" />
                <Label className="wrapped-input fld-prompt" >
                    <span >
                        Enter Name
                    </span>
                    </Label>
            </InnerContainer>
        </Container>
    );
}

export default InputForm;
