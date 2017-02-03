import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { compose, onlyUpdateForPropTypes, setPropTypes, withContext, getContext } from 'recompose'
import {changeInput, addTodo, toggleAbout} from './TodosActions';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Todo from './components/Todo';
import Helmet from 'react-helmet';
import CollapsibleView from '../../components/CollapsibleView';
import AboutTodoPage from './components/AboutTodoPage';

const TodosContainer = ({
  state,
  actions: {changeInput, addTodo, toggleAbout},
  vh}
  ) => {

  const inputValue = state.get('currentInput');
  const todoList = state.get('todos');

  const onEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(e.target.value)
      changeInput('')
    }
  }

  const styles = {

  };

  return(<div>

    <Helmet title="To Do List" />

        <CollapsibleView about={AboutTodoPage} vh={vh} open={state.get('aboutOpen')} minimizeCb={toggleAbout}>
          <h1>To Do List </h1>
          <Card>
            <CardText>
              <TextField
                hintText="Enter Todo Here"
                name="ToDoInput"
                value={inputValue}
                onChange={(e, v) => changeInput(v)}
                onKeyPress={onEnterKeyPress}/>
              {
                todoList.map((todo, i) => <Todo key={i} text={todo.get('text')}/>)
              }
            </CardText>
            This is the To Dos
          </Card>
        </CollapsibleView>
  </div>)
};


function mapStateToProps(state) {
  return {
    state: state.todoPage,
    vh: state.global.get('screenHeight')
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(
    {changeInput, addTodo, toggleAbout}, dispatch)}
}

const propTypes = {
  state: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  vh: React.PropTypes.number.isRequired
}


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps),
  onlyUpdateForPropTypes,
  setPropTypes(propTypes)
)(TodosContainer)


