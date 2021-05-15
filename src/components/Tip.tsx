/* eslint-disable react-hooks/rules-of-hooks */
import { FC, Dispatch } from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';

import { Actions, IState, ITip } from '../types/forRedux';
import { showTipAction } from '../redux/actions';

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

const TipBlock = styled.div`
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

interface ITipProps {
  showTip: boolean;
  showTipAction: (bool: boolean) => Actions;
}

// -----------------------------------------------

const Tip: FC<ITipProps> = ({ showTip, showTipAction }) => {
  function clickHandler(): void {
    const audio: HTMLAudioElement | null = document.querySelector('#unitaz');
    const audio2: HTMLAudioElement | null = document.querySelector('#lubimka');
    showTipAction(true);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio2?.play();
    setTimeout(() => {
      showTipAction(false);
    }, 2000);
  }

  return (
    <TipBlock>
      {showTip ? <TipContent>Увеличивай средний чек</TipContent> : ''}
      <TipTitle onClick={clickHandler}>Совет</TipTitle>
      <audio id="lubimka" preload="auto">
        <source src={song} type="audio/mp3" />
      </audio>
    </TipBlock>
  );
}

// -----------------------------------------------

function mapStateToProps({ tip }: IState): ITip {
  return {
    showTip: tip.showTip,
  }
}

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return {
    showTipAction: function(bool: boolean): any {
      dispatch(showTipAction(bool));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tip);