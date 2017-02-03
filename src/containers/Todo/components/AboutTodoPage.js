import React from 'react';
import { Link, IndexLink }  from 'react-router';

const AboutTodoPage = <div style={{backgroundColor: 'lightGray', height: '100% '}}>
  <IndexLink to="/">
    Click here to go back home
  </IndexLink>
  <br/>
  <br/>
  This page demonstrates a todo app built in React Redux. You can view the code here:
  <br />
  <br />
  <a href="https://github.com/soltran/sample-redux/tree/master/src/containers/Todo">
    https://github.com/soltran/sample-redux/tree/master/src/containers/Todo
  </a>
</div>

export default AboutTodoPage
