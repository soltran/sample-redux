import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import {styleMerge} from '../utils/styleUtils';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link }                             from 'react-router';


const Home = () => {

  const styles = {
    netflixCard: {
      backgroundColor: 'maroon',
      color: 'white'
    },
    jobDataCard: {
      backgroundColor: 'tan'
    }
  }

  return (
    <div>
      <Helmet title="Home Page" />
      <Link to="/netflix">
        <Card style={styles.netflixCard}>
          <CardTitle>
            Click here to search for Netflix titles
          </CardTitle>
        </Card>
      </Link>
      <Link to="/employment">
        <Card style={styles.jobDataCard}>>
          <CardTitle>
            Click here to view Job data
          </CardTitle>
        </Card>
      </Link>
    </div>
  );
};




export default Home;
