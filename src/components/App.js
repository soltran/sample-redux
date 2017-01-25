import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div>
      { <div>{props.children}</div> }
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

function mapStateToProps(state) {
  return {
    global: state.global
  }
}

export default connect(mapStateToProps)(App);
