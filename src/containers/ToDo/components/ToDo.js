import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose'
const ToDo = ({text}) => {

  console.log('text', text);
  return <div>
    <Card>
      <CardText>
        {text}
      </CardText>
    </Card>
  </div>
};

const propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default compose(
  onlyUpdateForPropTypes,
  setPropTypes(propTypes)
  )(ToDo)
