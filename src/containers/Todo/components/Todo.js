import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose'
import Checkbox from 'material-ui/Checkbox';
import {sFlexRow} from '../../../utils/styleUtils';

const ToDo = ({text}) => {

  return <div>
    <Card>
      <CardText>
        <div style={sFlexRow}>
         <Checkbox style={{maxWidth: '30px'}} />
          <span>{text}</span>
        </div>
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
