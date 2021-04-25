import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import store from '../redux/store';
import { setNameAction } from '../redux/actions';

import answer from '../audio/what.mp3';
import question from '../audio/plan.mp3';

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  font-size: 1.5rem;
`;

// -----------------------------------------------

function Rules({ setNameAction }) {
  setNameAction('rules');
  let currentAudio;
  store.subscribe(() => currentAudio && currentAudio.pause());
  
  function playSound(sound) {
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
      <Link to="/quiz">
        <Button type="button">Вернуться к викторине</Button>
      </Link>
    </>
  );
}

// ------------------------------------------------

function mapDispatchToProps(dispatch) {
  return {
    setNameAction: function(name) {
      dispatch(setNameAction(name));
    }
  }
}

export default connect(null, mapDispatchToProps)(Rules);