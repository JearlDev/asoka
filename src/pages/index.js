import React from 'react';
import Layout from '../Layout';

//components
import Hero from '../components/Hero/Hero';
import Intro from '../components/Intro/Intro';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
