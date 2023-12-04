import { styled } from "styled-components";

export const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
max-width: 375px;
margin: 0px auto;
 padding-top: 30px;


  @media screen and (min-width: 768px) {
    max-width: 768px;

  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`

