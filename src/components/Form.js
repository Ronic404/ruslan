/* eslint-disable react-hooks/rules-of-hooks */
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { submitAction, resetAction } from '../redux/actions';
import unitaz from '../audio/unitaz.mp3';
import tralala from '../audio/tralala.mp3';

// ---------------------------------------------------------

const Form = styled.form`
  margin-top: 1rem;
  font-size: 1.5rem;
  label {
    color: whitesmoke;
  }
  input:focus {
    outline: none;
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  opacity: ${({opacity}) => (opacity === 'true' ? 0.3 : 1)};
  transition: 0.3s;
`;

// ---------------------------------------------------------

export default function form() {
  const [numOfDeals, setNumOfDeals] = useState('');
  const [opacity, setOpacity] = useState('true');
  const dealsRef = useRef();
  const dispatch = useDispatch();
  const { isAnswered, name } = useSelector(state => state);
  
  const audio = document.querySelector('#unitaz');
  
  let sound;

  if (name === 'roma') {
    sound = tralala;
  } else if (name === 'ruslan') {
    sound = unitaz;
  }

  function clickHandler(e) {
    e.preventDefault();
    if (!isAnswered) {
      if (dealsRef.current.value !== '') {
        setNumOfDeals('');
        dispatch(submitAction(dealsRef.current.value));
        audio.volume = 0.2;
        audio.play();
      }
    } else {
      setOpacity('true');
      dispatch(resetAction());
    }
  }

  function changeHandler(event) {
    if (dealsRef.current.value === '') {
      setOpacity('true');
    } else {
      setOpacity('false');
    }
    setNumOfDeals(event.target.value);
  }

  return (
    <Form>
      {!isAnswered && 
        <Question>
          <label>Введи число:</label>
          <input type="number" ref={dealsRef} value={numOfDeals} onChange={changeHandler}/>
        </Question>
      }
      <audio id="unitaz">
        <source src={sound} />
      </audio>
      <Button opacity={opacity} onClick={clickHandler} type="submit">
        {isAnswered ? 'Попробуй ещё раз' : 'Сделать расчёт'}
      </Button>
    </Form>
  );
} 
