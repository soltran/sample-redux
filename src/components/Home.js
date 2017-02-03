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
      backgroundColor: 'teal',
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
    </div>
  );
};




export default Home;
