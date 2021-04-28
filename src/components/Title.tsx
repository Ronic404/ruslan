import { FC } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { resetName } from '../redux/actions';
import { Actions, IState } from '../types/forRedux';

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

interface ITitle {
  name: string | null;
  resetName: () => Actions;
}

// ------------------------------------------------------

const Title: FC<ITitle> = ({ name, resetName }) => {
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

function mapStateToProps(state: IState) {
  return {
    name: state.name,
  }
}

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return {
    resetName: function(): any {
      dispatch(resetName())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);