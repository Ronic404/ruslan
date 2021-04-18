/* eslint-disable react-hooks/rules-of-hooks */
import styled from 'styled-components';
import { connect } from 'react-redux';

const Answer = styled.div`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

function answer({num, isAnswered, name}) {
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
      break;
  }
  
}

function mapStateToprops(state) {
  return {
    num: state.numberOfDeals,
    isAnswered: state.isAnswered,
    name: state.name,
  }
}

export default connect(mapStateToprops)(answer);