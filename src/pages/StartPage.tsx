import { Dispatch, FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import voiceGenerator from '../utils/voiceGenerator';
import daysCounter from '../utils/daysCounter';

import ava_roma from '../img/ava_roma.jpeg';
import ava_ruslan from '../img/ava_ruslan.jpeg';
import { connect } from 'react-redux';
import { setNameAction } from '../redux/actions';
import { Actions } from '../types/forRedux';

import babka from '../audio/babka.mp3';

import store from '../redux/store';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 55vh;
  justify-content: space-between;
`;

const ChooseTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Avatars = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  img {
    border-radius: 100%;
    width: 30vw;
    :hover{
      transform: scale(1.1);
    }
  }
`;

const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 2;
`;

const Button = styled.button`
  width: 100%;
`;

interface IStartPageProps {
  setNameAction: (name: string) => Actions;
}

// -------------------------------------------------------------

const StartPage: FC<IStartPageProps> = ({ setNameAction }) => {
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

  function playSound(): void {
    const audio = new Audio(babka);
    audio.play();
    store.subscribe(() => audio && audio.pause());
  }


  return(
    <Section>
      <ChooseTitle>Выбери бедолагу:</ChooseTitle>
      <Avatars>
        <Link to="/person/ruslan" onClick={() => setNameAction('ruslan')}>
          <img src={ava_ruslan} alt="Ruslan" />
        </Link>
        <Link to="/person/roma" onClick={() => setNameAction('roma')}>
          <img src={ava_roma} alt="Roma" />
        </Link>
      </Avatars>
      <ButtonsBlock>
        <Button className="button" type="button" onClick={clickHandler}>Сколько дней отработано?</Button>
        <Link to="/quiz" onClick={() => setNameAction('quiz')}>
          <Button className="button" type="button">Викторина</Button>
        </Link>
        <Link to="/desk" onClick={() => setNameAction('desk')}>
          <Button className="button" type="button">Доска заданий</Button>
        </Link>
        <Button className="button" type="button" onClick={playSound}>Руслан, сколько контактов ты обработал?</Button>
      </ButtonsBlock>
    </Section>
  );
}

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return {
    setNameAction: function(name: string): any {
      dispatch(setNameAction(name));
    }
  }
}

export default connect(null, mapDispatchToProps)(StartPage);