import { Dispatch, FC } from 'react';
import { connect } from 'react-redux';

import { setNameAction } from '../redux/actions';
import { Actions } from '../types/forRedux';

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
      <Photos />
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