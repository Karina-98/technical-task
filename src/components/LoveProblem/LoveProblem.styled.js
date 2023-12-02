import styled from 'styled-components';



export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 156px;
  padding-bottom: 140px;
  position: relative;
`;

export const Text = styled.p`
  color: var(--Primary-Orange, #fb8958);
  text-align: center;
  font-family: Circular Std;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -0.4px;
  margin-left: 35px;
  margin-right: 35px;
`;

export const DivTask = styled.div`
  position: absolute;
  right: 110px;
  top: 50px;
`;

export const TextTask = styled.p`
  width: 221px;
  height: 28px;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  position: absolute;
  right: 130px;
  top: 60px;

`;

export const DivRectangle = styled.div`
  width: 114px;
  height: 112.813px;
  flex-shrink: 0;
  border-radius: 112.813px;
  background: #fff;
  position: absolute;
  right: 10px;
`;
export const DivRectangleSmall = styled.div`
  width: 96px;
  height: 95px;
  flex-shrink: 0;
  border-radius: 95px;
  background: #f5f5f5;
  position: absolute;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 26;
  right: 51px;
`;

export const DivClose = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
`;
