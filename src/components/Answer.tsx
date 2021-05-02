/* eslint-disable react-hooks/rules-of-hooks */
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FC } from 'react';
import { IPerson, IState } from '../types/forRedux';

const Answer = styled.div`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

// ----------------------------------------------------

const answer: FC<IPerson> = ({numberOfDeals, isAnswered, name}) => {
  switch (name) {
    case 'ruslan':
      return (
        <>
          {isAnswered && numberOfDeals && <Answer>Почему {+numberOfDeals}, а не {+numberOfDeals + 1}? Руслан, ты что не можешь +1 прибавить?</Answer>}
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
  }
}

// ----------------------------------------------------

function mapStateToprops({person}: IState): IPerson {
  return {
    numberOfDeals: person.numberOfDeals,
    isAnswered: person.isAnswered,
    name: person.name,
  }
}

export default connect(mapStateToprops)(answer);