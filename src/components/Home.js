import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {styleMerge} from '../utils/styleUtils';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link }                             from 'react-router';


const Home = () => {

  const styles = {
    connectFourCard: {
      backgroundColor: 'maroon',
      color: 'white'
    },
    jobDataCard: {
      backgroundColor: 'teal',
      color: 'white'
    },
    suitsCard: {
      backgroundColor: 'darkBlue',
      color: 'white'
    }
  };

  return (
    <div>
      <Helmet title="Home Page" />
      <Link to="/todo" style={{textDecoration: 'none'}}>
        <Card style={styles.jobDataCard}>>
          <CardTitle>
            Click here to manage Todos
          </CardTitle>
        </Card>
      </Link>
      <Link to="/connectfour" style={{textDecoration: 'none'}}>
        <Card style={styles.connectFourCard}>>
          <CardTitle>
            Click here to play Connect Four
          </CardTitle>
        </Card>
      </Link>
      <a href="http://infinitesuits.herokuapp.com/" style={{textDecoration: 'none'}}>
        <Card style={styles.suitsCard}>
          <CardTitle>
            Click here to check out Infinite Suits
          </CardTitle>
        </Card>
      </a>
    </div>
  );
};




export default Home;
