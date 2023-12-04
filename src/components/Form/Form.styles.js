import { styled } from 'styled-components';

export const DivForm = styled.div`
padding-top: 60px;
padding-bottom: 70px;
position: relative;
`

export const Title = styled.h1`
  width: 300px;
  color: #fff;
  font-family: Circular Std;
  font-size: 55px;
  font-style: normal;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: -1.2px;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media(min-width: 768px){
    width: 677px;
    font-size: 60px;
  }
  
`;

export const Text = styled.p`
  width: 323px;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 100% */
  letter-spacing: -0.24px;
  margin-bottom: 34px;
  margin-top: 34px;
`;

export const Forma = styled.form`
  width: 250px;
  height: 601px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 72px 42px 40px 41px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f3f3f3;
  box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);


  @media(min-width: 768px){
    width: 512px;
  }
`;

export const Input = styled.input`
  width: 259px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);
  border: none;
  margin-bottom: 16px;
  padding: 18px 16px;
  color: #939393;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media(min-width: 768px){
    width: 429px;
  }
`;

export const Textarea = styled.textarea`
  width: 259px;
  height: 270px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);
  border: none;
  margin-bottom: 34px;
  padding: 18px 16px;
  color: #939393;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media(min-width: 768px){
    width: 429px;
  }
`;

export const Button = styled.button`
  width: 243px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 32.5px;
  border: 1px solid #3d4f5c;
  background-color: #3d4f5c;
  color: #fbfbfa;
  text-align: center;
  font-family: Circular Std;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;

export const Image = styled.img`
position: absolute;
right: 0;
bottom: 150px;

@media(min-width: 768px){
    right: -50px;
    bottom: 0;
}
`