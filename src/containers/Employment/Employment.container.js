import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { compose, onlyUpdateForPropTypes, setPropTypes, withContext, getContext } from 'recompose'
import {initializePage, loadPage} from './redux/employmentActions';


const Employment = ({
  state,
  actions: {
    initializePage,
    loadPage
  }
}) => {

  const hasInitialized = state.get('isInitialized');
  if(!hasInitialized) {
    initializePage();
    loadPage();
  }

  return(
    <div className="u-flexContainer u-flexContainer--rowNoWrap u-flexStretch">
      <Helmet title="Employment Page" />
      Loading employment data ...
    </div>
  )
};

function mapStateToProps(state) {
  return {
    state: state.employment
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(
    {
      initializePage,
      loadPage
    }, dispatch)}
}

const propTypes = {
  state: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps),
  onlyUpdateForPropTypes,
  setPropTypes(propTypes)
)(Employment)
