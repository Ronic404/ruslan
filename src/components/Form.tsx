import { useRef, useState, FC, MouseEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { submitAction, resetAction } from '../redux/actions';
import { IPerson } from '../types/forRedux';

// ---------------------------------------------------------

const FormBlock = styled.form`
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

interface IFormProps {
  sound: string;
}

// ---------------------------------------------------------

const Form: FC<IFormProps> = ({ sound }) => {
  const [numOfDeals, setNumOfDeals] = useState<number | null>(null);
  const [opacity, setOpacity] = useState<string>('true');
  const dealsRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { isAnswered }: IPerson = useTypedSelector(state => state.person);
  const audio: HTMLAudioElement | null = document.querySelector('#unitaz');

  function clickHandler(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    if (!isAnswered) {
      if (dealsRef.current?.value !== '' && dealsRef.current?.value !== undefined) {
        setNumOfDeals(null);
        dispatch(submitAction(+dealsRef.current.value));
        audio && (audio.volume = 0.2);
        audio?.play();
      }
    } else {
      setOpacity('true');
      dispatch(resetAction());
    }
  }

  function changeHandler(event: ChangeEvent<HTMLInputElement>): void {
    if (dealsRef.current?.value === '') {
      setOpacity('true');
    } else {
      setOpacity('false');
    }
    setNumOfDeals(+event.target.value);
  }

  return (
    <FormBlock>
      {!isAnswered && 
        <Question>
          <label>Введи число:</label>
          <input type="number" ref={dealsRef} value={numOfDeals || ''} onChange={changeHandler}/>
        </Question>
      }
      <audio id="unitaz" preload="auto">
        <source src={sound} />
      </audio>
      <Button className="button" opacity={opacity} onClick={clickHandler} type="submit">
        {isAnswered ? 'Попробуй ещё раз' : 'Сделать расчёт'}
      </Button>
    </FormBlock>
  );
} 

export default Form;