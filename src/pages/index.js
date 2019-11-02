import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

var settings = {
  images: [
    { url: require('../assets/images/feature_marty.jpg'), position: 'center' },
    { url: require('../assets/images/feature_colorado_lake.jpg'), position: 'center' },
    { url: require('../assets/images/feature_colorado_mts_lake.jpg'), position: 'center' },
    { url: require('../assets/images/feature_colorado_sun2.jpg'), position: 'center' },
    { url: require('../assets/images/feature_marty_mthood.jpg'), position: 'center' },
    { url: require('../assets/images/feature_marty_sasha.jpg'), position: 'center' },
    { url: require('../assets/images/feature_sasha.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 3000,
};

const IndexPage = () => (
  <Layout>
    <Header />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
