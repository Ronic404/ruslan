import { Dispatch, FC } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import store from '../redux/store';
import { Actions } from '../types/forRedux';
import { setNameAction } from '../redux/actions';

import answer from '../audio/what.mp3';
import question from '../audio/plan.mp3';

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  font-size: 1.5rem;
`;

interface IRulesProps {
  setNameAction: (name: string) => Actions;
}

// -----------------------------------------------

const Rules: FC<IRulesProps> = ({ setNameAction }) => {
  setNameAction('rules');

  let currentAudio: HTMLAudioElement;
  store.subscribe(() => currentAudio && currentAudio.pause());
  
  function playSound(sound: any): void {
    if (currentAudio) currentAudio.pause();
    currentAudio = new Audio(sound);
    currentAudio.play()
  }

  return (
    <>
      <Button type="button" onClick={() => playSound(answer)}>Вопрос</Button>
      <br />
      <Button type="button" onClick={() => playSound(question)}>Ответ</Button>
      <br />
      <Link to="/quiz" onClick={() => setNameAction('quiz')}>
        <Button type="button">Вернуться к викторине</Button>
      </Link>
    </>
  );
}

// ------------------------------------------------

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return {
    setNameAction: function(name: string): any {
      dispatch(setNameAction(name));
    }
  }
}

export default connect(null, mapDispatchToProps)(Rules);