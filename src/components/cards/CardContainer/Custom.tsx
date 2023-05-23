import { styled } from "styled-components";
type Props = {
  url: string;
};

export const CustomCardContainer = styled.div<Props>`
  position: absolute;
  height: 100%;
  width: 100%;
  filter: alpha(opacity=100);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  cursor: pointer;
  background-image:url(${(props) => `"${props.url}"`}) ;
  background-repeat: no-repeat;
  background-size: contain;
`;

// export const CardContainer = ({ children }: Props) => {
//   return (
//     <Containr className="d-flex justify-content-center align-items-center">
//       {children}
//     </Containr>
//   );
// };
