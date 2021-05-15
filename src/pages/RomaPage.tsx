import { Dispatch, FC } from 'react';
import { connect } from 'react-redux';

import { Actions } from '../types/forRedux';
import { setNameAction } from '../redux/actions';

import Photos from '../components/Photos';
import Form from '../components/Form';
import Answer from '../components/Answer';

import roma_1 from '../img/roma_1.jpeg';
import ruslan_3 from '../img/ruslan_3.jpeg';

import tralala from '../audio/tralala.mp3';

interface IRomaProps {
  setNameAction: (name: string) => Actions;
}

// ------------------------------------------------

const RomaPage: FC<IRomaProps> = ({ setNameAction }) => {
  setNameAction('roma');

  return (
    <>
      <Photos photo={[roma_1, ruslan_3]} />
      <Form sound={tralala} />
      <Answer />
    </>
  );
}

// ------------------------------------------------

function mapDispatchToProps(dispatch: Dispatch<Actions>) {
  return {
    setNameAction: function(name: string): any {
      dispatch(setNameAction(name));
    }
  }
}

export default connect(null, mapDispatchToProps)(RomaPage);