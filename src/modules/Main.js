import { graphql } from 'gatsby';
import React from 'react';

// Note: import components from components folder
import Hero from '../components/Hero';
import ImageContent from '../components/ImageContent';

const Main = (props) => {
  // Note: Assign pageContent ACF field group to variable called 'modules'

  //   const modules = props.modules.pageContent;
  //   const { location } = props;

  // Note: Assign imported components to newly created 'components' object

  const components = {
    Hero: Hero,
    ImageContent: ImageContent,
  };

  return (
    // Note: Map through modules and create elements for each one (using imported components as templates and passing props down)
    <>
      {modules
        ? modules.map((module, i) => {
            const moduleName = module.__typename.replace(
              'WpPage_Pagecontent_PageContent_',
              ''
            );
            return (
              components[moduleName] &&
              React.createElement(components[moduleName], {
                key: i,
                module,
                location,
                i,
              })
            );
          })
        : null}
    </>
  );
};

export default Main;

// Note: export main fragments/modules from Wordpress with GraphQL

// export const MainFragment = graphql`
//   fragment MainFragment on WpPage {
//     pageContent {
//       pageContent {
//         __typename
//         ...PageBannerFragment
//         ...PageGeneralContentFragment
//         ...PageImageWithContentFragment
//         ...PageFullWidthImageFragment
//         ...PageTestimonialFragment
//         ...PageVillaCardSliderFragment
//         ...PageIntroductionWithImageFragment
//         ...PageFullwidthImageSliderFragment
//         ...PageExperienceCardSliderFragment
//         ...PageAwardsAndFeaturesFragment
//         ...PageRelatedCardsFragment
//         ...PageVillasListingFragment
//         ...PageContactInfoFragment
//         ...PageGalleryListFragment
//         ...PageImageCardSliderFragment
//         ...PageImageWithTabContentFragment
//         ...PageVillaRatesFragment
//         ...PageAccordionFragment
//         ...PageVillaSliderWithPopupFragment
//         ...PageContactWithOfficesFragment
//         ...PageTermAndConditionsFragment
//         ...PagePressAndAwardsFragment
//         ...PageFeaturedBlogFragment
//         ...PageBlogListingFragment
//         ...PageTradePartnersFragment
//       }
//     }
//   }
// `;
