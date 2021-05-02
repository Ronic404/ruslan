import { FC } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Photos from '../components/Photos';
import Form from '../components/Form';
import Answer from '../components/Answer';
import Tip from '../components/Tip';

import ruslan_1 from '../img/ruslan_1.jpeg';
import ruslan_2 from '../img/ruslan_2.jpeg';
import photoLena from '../img/lena.jpeg';

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
      <Photos photo={[ruslan_1, photoLena, ruslan_2]} />
      <Form />
      <Answer />
      {isAnswered ? <Tip /> : ''}
    </>
  );
}

// --------------------------------------------------

function mapStateToProps({person}: IState) {
  return {
    isAnswered: person.isAnswered,
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