import styled, { keyframes } from 'styled-components';

const growOnHoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

export const DivWelcome = styled.div``;

export const TitleWelcome = styled.h1`
  color: #3d4f5c;
  width: 307px;
  margin-bottom: 25px;
  font-family: Circular Std;
  font-size: 85px;
  font-style: normal;
  font-weight: 700;
  line-height: 85px;
  letter-spacing: -1.7px;

  @media (min-width: 768px) {
    width: 407px;
  }
`;

export const TextWelcome = styled.p`
  width: 258px;
  margin-top: 25px;
  margin-bottom: 25px;
  color: var(--Primary-Orange, #fb8958);
  font-family: Circular Std;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    width: 758px;
  }
`;

export const ButtonWelcome = styled.button`
  margin-top: 25px;
  color: #fff;
  font-family: Circular Std;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 100% */
  letter-spacing: -0.18px;
  border-radius: 32.5px;
  background: #46b8c8;
  padding: 13px 20px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    color: var(--Complementary-Green, #46b8c8);
    background-color: #fff;
    border: 1px solid var(--Complementary-Green, #46b8c8);
    animation: ${growOnHoverAnimation} 0.3s ease forwards;
  }
`;
export const Image = styled.img`
  width: 705px;
  height: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  // display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 488px;
  }

  @media (min-width: 1440px) {
    width: 705px;
  }
`;

export const Div = styled.div`
  position: relative;
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (min-width: 768px) {
    margin-top: 145px;
    margin-bottom: 225px;
  }
`;
