import { styled } from 'styled-components';

export const ContainerOutWork = styled.div`
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextTolq = styled.p`
  color: #a9bc87;
  text-align: center;
  font-family: Circular Std;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 93.75% */
  letter-spacing: -0.32px;
  padding-bottom: 25px;
`;

export const TextLegal = styled.p`
  color: #8b60d3;
  text-align: center;
  font-family: Circular Std;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 93.75% */
  letter-spacing: -0.32px;
  padding-bottom: 25px;
`;

export const TextFeedback = styled.p`
  color: #8bb5c9;
  text-align: center;
  font-family: Circular Std;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 93.75% */
  letter-spacing: -0.32px;
  padding-bottom: 25px;
`;

export const TextCodekeeper = styled.p`
  color: #00a0b6;
  text-align: center;
  font-family: Circular Std;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 93.75% */
  letter-spacing: -0.32px;
  padding-bottom: 25px;
`;

export const Text = styled.p`
  width: 387px;
  color: #3d4f5c;
  text-align: center;
  font-family: Circular Std;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.16px;
`;

export const Item = styled.li`
  width: 365px;
  padding: 45px 101px 50px 100px;

  flex-shrink: 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);
`;

export const List = styled.ul`
  margin-top: 55px;
  margin-bottom: 180px;
  display: flex;
  flex-wrap: wrap;

  li {
    margin-bottom: 25px;
    margin-right: 25px;
  }

  li:nth-child(3),
  li:nth-child(4) {
    margin-bottom: 0;
  }

  li:nth-child(2),
  li:nth-child(4) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  margin-top: 25px;
  margin-bottom: 30px;
`;

export const TextCreate = styled.p`
  width: 882px;
  color: var(--Primary-Orange, #fb8958);
  text-align: center;
  font-family: Circular Std;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: -0.4px;
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 180px;
`;

export const DivCreate = styled.div`
  position: relative;
  display: flex;
`;
