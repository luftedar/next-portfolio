import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Layout from '../components/Layout';
import '../styles/libraries/_nprogress.css';
import '../styles/global.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
