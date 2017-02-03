import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { compose, onlyUpdateForPropTypes, setPropTypes} from 'recompose'
import Helmet from 'react-helmet';

const ConnectFour = ({vw, vh}) => {

  return (
    <div>
      <Helmet title="Ultimate Connect Four" />
      <iframe width={vw} height={vh} src="https://dl.dropboxusercontent.com/u/3156331/apps/connectfour/dist/index.html#/"></iframe>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    vw: state.global.get('screenWidth'),
    vh: state.global.get('screenHeight')
  }
}

const propTypes = {
  vw: React.PropTypes.number.isRequired,
  vh: React.PropTypes.number.isRequired
}
export default compose(
  connect(
    mapStateToProps),
  onlyUpdateForPropTypes,
  setPropTypes(propTypes)
)(ConnectFour)

