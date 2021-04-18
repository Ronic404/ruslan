import { connect } from 'react-redux';

import Photos from '../components/Photos';
import Form from '../components/Form';
import Answer from '../components/Answer';
import Tip from '../components/Tip';

import { setNameAction } from '../redux/actions';

// --------------------------------------------------

function RuslanPage({ isAnswered, setNameAction }) {
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

function mapStateToProps(state) {
  return {
    isAnswered: state.isAnswered,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setNameAction: function(name) {
      dispatch(setNameAction(name));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RuslanPage);