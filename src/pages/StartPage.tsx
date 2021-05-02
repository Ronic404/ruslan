import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import voiceGenerator from '../utils/voiceGenerator';
import daysCounter from '../utils/daysCounter';

import ava_roma from '../img/ava_roma.jpeg';
import ava_ruslan from '../img/ava_ruslan.jpeg';

const Avatars = styled.div`
  width: 100vw;
  display: flex;
  gap: 1rem;

  img {
    border-radius: 100%;
    width: 30vw;

    :hover{
      transform: scale(1.1);
    }
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 10px;
`;

// -------------------------------------------------------------

export default function StartPage(): ReactElement {
  const days = daysCounter();
  
  function clickHandler(): void {
    switch (days) {
      case 0:
        voiceGenerator('В этом месяце ты ещё не работал');
        break;
      case 1:
      case 21:
        voiceGenerator(`Отработан ${days} день`);
        break;
      case 2:
      case 3:
      case 4:
      case 22:
        voiceGenerator(`Отработано ${days} дня`);
        break;
      default: 
        voiceGenerator(`Отработано ${days} дней`);
    }
  }

  return(
    <>
      <h3>Выбери бедолагу:</h3>
      <Avatars>
        <Link to="/ruslan">
          <img src={ava_ruslan} alt="Ruslan" />
        </Link>
        <Link to="/roma">
          <img src={ava_roma} alt="Roma" />
        </Link>
      </Avatars>
      <button type="button" onClick={clickHandler}>Сколько дней отработано?</button>
      <br />
      <Link to="/quiz">
        <Button type="button">Викторина</Button>
      </Link>
      <Link to="/desk">
        <Button type="button">Доска заданий</Button>
      </Link>
    </>
  );
}