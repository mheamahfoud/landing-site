import { FC } from 'react';
import { styled } from "styled-components";
const Container = styled.div`
    z-index: 88;
    min-height: 351px;
    font-size: 18px;
    line-height: 39px;
    color: #7F7F7F;
`;
const Nis = styled.span`
  color: #f15722;
`;
const Paragraph = styled.p`
  margin: 0;
    color: #7F7F7F;
`;
const Dot = styled.span`
     color: #f15722;
`;
const Right: FC = () => {
    return (
        <Container className=""  >
            <Paragraph> <Nis>Nis</Nis> <span id="u1790-2"> offers services in the field of audio dubbing for all artistic works:</span></Paragraph>
            <Paragraph><span id="u1790-4">Drama, movies, documentaries, cartoon films… etc; transforming any original language into the following languages</span> <span id="u1790-6">and accents:</span></Paragraph>
            <Paragraph><Dot>• </Dot><span id="u1790-9">Classical Arabic</span></Paragraph>
            <Paragraph><Dot>•</Dot> <span id="u1790-13">Syrian accent</span></Paragraph>
            <Paragraph><Dot>•</Dot> <span id="u1790-17">Egyptian Accent</span></Paragraph>
            <Paragraph><Dot>•</Dot> <span id="u1790-21">Turkish</span></Paragraph>
            <Paragraph><Dot>•</Dot> <span id="u1790-25">Persian</span></Paragraph>
            <Paragraph><Dot>•</Dot> <span id="u1790-29">Kurdish</span></Paragraph>
        </Container>
    );
}

export default Right;
