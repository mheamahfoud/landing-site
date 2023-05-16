import { styled } from "styled-components";
type Props = {
  url: string;
};
export const CustomCardContainer = styled.div<Props>`
  width: 100%;
  height: 300px;
  filter: alpha(opacity=100);
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  cursor: pointer;
  background:url(${(props) => props.url}) ;
  &:hover {
    transform: scale(0.9);
  }
  background-repeat: no-repeat;
  background-size: cover;
`;

// export const CardContainer = ({ children }: Props) => {
//   return (
//     <Containr className="d-flex justify-content-center align-items-center">
//       {children}
//     </Containr>
//   );
// };
