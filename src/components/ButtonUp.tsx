import { FC } from 'react';
import styled from 'styled-components';

const DivButtonUp = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 3px solid #5cc57c;
  position: fixed;
  right: 24px;
  bottom: 3vh;
  cursor: pointer;
  z-index: 9999;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const SpanArrow = styled.span`
  position: absolute;
  font-size: 2.5rem;
  top: -3px;
  left: 8px;
  color: #5cc57c;
`;

const ButtonUp: FC = () => {
  function clickHandler(): void {
    window.scrollTo(0, 0);
  }

  return (
    <DivButtonUp onClick={clickHandler}>
      <SpanArrow>↑</SpanArrow>
    </DivButtonUp>
  )
}

export default ButtonUp;