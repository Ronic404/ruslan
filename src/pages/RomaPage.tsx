import { Dispatch, FC } from 'react';
import { connect } from 'react-redux';

import { setNameAction } from '../redux/actions';
import { Actions } from '../types/forRedux';

import roma_1 from '../img/roma_1.jpeg';
import ruslan_3 from '../img/ruslan_3.jpeg';
// import girl from '../img/girl.jpg';

import Photos from '../components/Photos';
import Form from '../components/Form';
import Answer from '../components/Answer';

interface IRomaProps {
  setNameAction: (name: string) => Actions
}

// ------------------------------------------------

const RomaPage: FC<IRomaProps> = ({ setNameAction }) => {
  setNameAction('roma');
  
  return (
    <>
      <Photos photo={[roma_1, ruslan_3]} />
      <Form />
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