import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../layout';
// import Seo from "../components/Seo/Seo";
import Main from '../modules/Main';

const Page = (props) => {
  //   const post = props.data.post;
  //   const { location } = props;

  return (
    <Layout props={props}>
      {/* <Seo seo={post.seo} /> */}
      <Main modules={post.pageContent} location={location} />
    </Layout>
  );
};

export default Page;
// export const pageQuery = graphql/* GraphQL */ `
//   query PageById($id: String!) {
//     post: wpPage(id: { eq: $id }) {
//       id
//       title
//       ...MainFragment
//       ...seoPageFragment
//     }
//   }
// `;
