import { FC } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { resetNameAction } from '../redux/actions';
import { Actions, IState } from '../types/forRedux';

const Header = styled.div`
  position: relative;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: whitesmoke;
  text-shadow: 0px 2px 1px green;
  margin-bottom: 1rem;
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
  return (
    <Header>
      <H1>Программа для расчёта количества сделок</H1>
      {name ? 
        <Link to="/" onClick={resetName} >
          <Back>←</Back>
        </Link> 
        : ''
      }
    </Header>
  );
} 

// ------------------------------------------------------

function mapStateToProps({person}: IState) {
  return {
    name: person.name,
  }
}

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return {
    resetName: function(): any {
      dispatch(resetNameAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);