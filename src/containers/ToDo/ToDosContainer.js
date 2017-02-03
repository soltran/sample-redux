import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { compose, onlyUpdateForPropTypes, setPropTypes, withContext, getContext } from 'recompose'
import {changeInput, addTodo} from './ToDosActions';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import ToDo from './components/ToDo';
import Helmet from 'react-helmet';


const ToDosContainer = ({state, actions: {changeInput, addTodo}}) => {

  const inputValue = state.get('currentInput');
  const toDoList = state.get('toDos');

  const onEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(e.target.value)
    }
  }

  const styles = {

  };

  return(<div>
    <Helmet title="To Do List" />

    <h1>To Do List </h1>
    <Card>
      <CardText>
        <TextField name="ToDoInput" value={inputValue} onChange={(e, v) => changeInput(v)} onKeyPress={onEnterKeyPress}/>
        {
          toDoList.map((todo) => <ToDo text={todo.text}/>)
        }
      </CardText>

      This is the To Dos
    </Card>

  </div>)
};


function mapStateToProps(state) {
  return {
    state: state.toDoPage
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(
    {changeInput, addTodo}, dispatch)}
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
)(ToDosContainer)


