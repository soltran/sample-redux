import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <Helmet title="Page Not Found" />
      <h4>
        404 Page Not Found
      </h4>
      <Link to="http://www.soltran.io"> This link does not do anything! </Link>
    </div>
  );
};

export default NotFoundPage;
