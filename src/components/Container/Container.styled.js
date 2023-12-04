import { styled } from "styled-components";

export const DivContainer = styled.div`
max-width: 375px;
margin: 0px auto;
padding: 0px 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 60px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;

padding: 0px 120px;
  }
`

export const DivContainerBackground = styled.div`

background-color: #FBFAFA;
max-width: 375px;
padding: 0px 20px;
margin: 0px auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 60px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;

padding: 0px 120px;
  }
`

export const DivContainerForm = styled.div`

background-color: var(--Secondary-Yellow, #FFC351);
max-width: 375px;
padding: 0px 20px;
margin: 0px auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0px 60px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;

padding: 0px 120px;
  }
`