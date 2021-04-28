import { Dispatch, FC, useRef, useState, FormEvent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Tip from '../components/Tip';

import { Actions } from '../types/forRedux';
import { setNameAction } from '../redux/actions';

import tralala from '../audio/tralala.mp3';
import among from '../audio/among.mp3';

const changecolor = keyframes`
  0% {
    ilter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
  100% {
    filter: hue-rotate(0deg);
  }
`;

const Title = styled.h2`
  color: green;
  animation: ${changecolor} 3s infinite;
`;


const ButtonRules = styled.button`
  width: 100%;
  margin-top: 20px;
`;

const Submit = styled.button`
  margin-top: 10px;
`;

const Popup = styled.div`
  position: absolute;
  top: 20vh;
  height: 50vh;
  width: 85%;
  background-color: white;
  font-size: 2rem;
`;

interface IQuizProps {
  setNameAction: (name: string) => Actions;
}

// -----------------------------------------------

const Quiz: FC<IQuizProps> = ({ setNameAction }) => {
  setNameAction('quiz');
  const answers = [
    'увеличивай средний чек',
    'увеличить средний чек',
    'нужно увеличить средний чек',
    'уу'
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [result, setResult] = useState('');

  const refInput = useRef<HTMLInputElement>(null);

  function closePopup(): void {
    setShowPopup(false);
  }

  function clickHandler(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();
    if (refInput.current !== null) {
      if (answers.includes(refInput.current.value.toLowerCase().trim())) {
        new Audio(tralala).play();
        setResult('Красучик!!!');
        setShowPopup(true);
      } else if (refInput.current.value === '') {
        return
      } else {
        new Audio(among).play();
        setResult('Ёпс тудэй, может нужно увеличить средний чек?');
        setShowPopup(true);
      }
      refInput.current.value = '';
    }
  }

  return (
    <>
     <Title>Викторина</Title>
     <form action="#" method="GET">
      <label>
        <h2>Что нужно сделать для выполнения плана?</h2>
        <br />
        <input ref={refInput} placeholder="Введи ответ" />
      </label>
      <br />
      <Submit type="submit" onClick={clickHandler}>Ответить</Submit>
     </form>
     <Link to="/rules">
        <ButtonRules type="button">Правила игры!</ButtonRules>
      </Link>
      <Tip />
      {showPopup &&
        <Popup>
          <p>{result}</p>
          <button onClick={closePopup}>Закрыть</button>
        </Popup>
      }
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

export default connect(null, mapDispatchToProps)(Quiz);