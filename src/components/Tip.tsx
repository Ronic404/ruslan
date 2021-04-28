/* eslint-disable react-hooks/rules-of-hooks */
import { useState, FC } from 'react';
import styled, { keyframes } from 'styled-components';

import song from '../audio/lubimka.mp3';

const zoom = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const Tip = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  text-align: center;
`;

const TipContent = styled.p`
  color: #00ff21;
`;

const TipTitle = styled.p`
  position: relative;
  color: #abcc93;
  animation: 1s ${zoom} infinite;
  padding-top: 10px;
`;

// -----------------------------------------------

const tip: FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const audio: HTMLAudioElement | null = document.querySelector('#unitaz');
  const audio2: HTMLAudioElement | null = document.querySelector('#lubimka');

  function clickHandler(): void {
    setShow(true);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio2?.play();
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }

  return (
    <Tip>
      {show ? <TipContent>Увеличивай средний чек</TipContent> : ''}
      <TipTitle onClick={clickHandler}>Совет</TipTitle>
      <audio id="lubimka">
        <source src={song} type="audio/mp3" />
      </audio>
    </Tip>
  );
}

export default tip;