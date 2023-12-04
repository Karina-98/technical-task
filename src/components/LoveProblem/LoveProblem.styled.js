import styled from 'styled-components';



export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 120px;
  padding-bottom: 350px;
  position: relative;

  @media(min-width: 768px){
 

  }

  @media(min-width: 1440px){
 padding-top: 156px;
  padding-bottom: 140px;
  }
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
  top: 350px;
  left: 1px;

  @media(min-width: 768px){
top: 280px;
left: 110px;

  }

  @media(min-width: 1440px){
top: 50px;
left:820px;

  }
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
  top: 360px;
  left: 30px;

   @media(min-width: 768px){
    top:290px;
    left: 140px;

  }

  @media(min-width: 1440px){
top: 60px;
left: 850px;

  }

`;

export const DivRectangle = styled.div`
  width: 114px;
  height: 112.813px;
  flex-shrink: 0;
  border-radius: 112.813px;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 450px;

  @media(min-width: 768px){
    top: 380px;
    right: 60px;

  }

  @media(min-width: 1440px){
top: 140px;
right: 0;

  }
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
  top: 460px;
  
  @media(min-width: 768px){
    top: 400px;
    right: 100px;
  }

  @media(min-width: 1440px){
    top: 160px;
    right: 40px;
  }
`;

export const DivClose = styled.div`
  position: absolute;
  right: 0;
  top: 320px;

  @media(min-width: 768px){
    top: 280px;
    right: 50px;
  }


  @media(min-width: 1440px){
    top:60px;
    right: 0;
  }
`;
