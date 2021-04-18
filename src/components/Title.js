import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { resetName } from '../redux/actions';

const Header = styled.div`
  position: relative;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: whitesmoke;
`;

const Back = styled.div`
  position: absolute;
  border-radius: 30%;
  top: -7px;
  right: -7px;
  font-size: 3rem;
  color: green;
`;

// ------------------------------------------------------

function Title({ name, resetName }) {
  function clickHandler() {
    resetName();
  }

  return (
    <Header>
      <H1>Программа для расчёта количества сделок</H1>
      {name ? 
        <Link to="/">
          <Back onClick={clickHandler}>←</Back>
        </Link> 
        : ''
      }
    </Header>
  );
} 

// ------------------------------------------------------

function mapStateToProps(state) {
  return {
    name: state.name,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resetName: function() {
      dispatch(resetName())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);