import styled from 'styled-components';

export const ButtonTop = styled.button`
  position: fixed;
  bottom: ${(props) => (props.visible ? '20px' : '-100px')};
  right: 20px;
  transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;

  img {
    opacity: ${(props) => (props.visible ? '1' : '0')};
    transition: opacity 0.3s ease-in-out;
  }
`;