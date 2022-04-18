import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component pageProps={pageProps} />
  </Layout>
  );
}

MyApp.propTypes = {
  pageProps: PropTypes.shape({}),
  Component: PropTypes.elementType,
};

export default MyApp;
