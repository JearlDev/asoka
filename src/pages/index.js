import React from 'react';
import Layout from '../Layout';

//components
import Hero from '../components/Hero/Hero';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
