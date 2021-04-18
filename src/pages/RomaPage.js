import { connect } from 'react-redux';

import { setNameAction } from '../redux/actions';

import Photos from '../components/Photos';
import Form from '../components/Form';
import Answer from '../components/Answer';

function RomaPage({ setNameAction }) {
  setNameAction('roma');
  
  return (
    <>
      <Photos />
      <Form />
      <Answer />
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setNameAction: function(name) {
      dispatch(setNameAction(name));
    }
  }
}

export default connect(null, mapDispatchToProps)(RomaPage);