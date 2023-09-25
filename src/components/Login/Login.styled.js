import styled from '@emotion/styled';
import { Link } from 'react-router-dom';



export const ContainerSingIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


export const ContainerField = styled.div`
margin-bottom: 30px;
`

export const Text = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 28px;
  margin-top: 14px;

`;

export const Button = styled.button`
  display: grid;
  border-radius: 12px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  grid-gap: 10px;
  margin-top: 28px;
  
  
  background-color: gainsboro;
  

`;

export const TextBtn = styled.span`

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.12;


  @media (min-width: 768px) {
  font-size: 20px;
  }
`

export const TextSingUp = styled.p`
font-family: Roboto;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 1.5; 
`

export const LinkSingUp = styled(Link)`
 font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
  color: black;
`


export const DivSingUp = styled.div`
display: flex;
  margin-top: 12px;
align-items: center;
`