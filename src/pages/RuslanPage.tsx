import { FC } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Photos from '../components/Photos';
import Form from '../components/Form';
import Answer from '../components/Answer';
import Tip from '../components/Tip';

import { setNameAction } from '../redux/actions';
import { Actions, IState } from '../types/forRedux';

interface IRuslanPageProps {
  isAnswered: boolean;
  setNameAction: (name: string) => Actions;
}

// --------------------------------------------------

const RuslanPage: FC<IRuslanPageProps> = ({ isAnswered, setNameAction }) => {
  setNameAction('ruslan');

  return (
    <>
      <Photos />
      <Form />
      <Answer />
      {isAnswered ? <Tip /> : ''}
    </>
  );
}

// --------------------------------------------------

function mapStateToProps(state: IState) {
  return {
    isAnswered: state.isAnswered,
  }
}

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return {
    setNameAction: function(name: string): any {
      dispatch(setNameAction(name));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RuslanPage);