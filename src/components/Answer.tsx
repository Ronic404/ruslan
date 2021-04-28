/* eslint-disable react-hooks/rules-of-hooks */
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FC } from 'react';
import { IState } from '../types/forRedux';

const Answer = styled.div`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

interface IAnswer {
  num: number;
  isAnswered: boolean;
  name: string | null;
}

// ----------------------------------------------------

const answer: FC<any> | undefined = ({num, isAnswered, name}) => {
  switch (name) {
    case 'ruslan':
      return (
        <>
          {isAnswered && <Answer>Почему {+num}, а не {+num + 1}? Руслан, ты что не можешь +1 прибавить?</Answer>}
        </>
      );
    case 'roma':
      return (
        <>
          {isAnswered && <Answer>WOW!!! Прости, я прослушала, что ты сказал?</Answer>}
        </>
      );
    default:
      return(<></>);
      break;
  }
}

// ----------------------------------------------------

function mapStateToprops(state: IState) {
  return {
    num: state.numberOfDeals,
    isAnswered: state.isAnswered,
    name: state.name,
  }
}

export default connect(mapStateToprops)(answer);