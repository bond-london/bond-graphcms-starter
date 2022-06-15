import { create } from '@storybook/theming';
import { graphql, useStaticQuery } from 'gatsby';

// const { image } =
// useStaticQuery<Queries.SiteLogoQuery>(graphql`
//   query SiteLogo {
//     file(name: { eq: "icon" }) {
//       publicURL
//     }
//   }
// `);

export default create({
  base: 'light',
  brandTitle: 'Bond London GraphCMS Starter',
  brandUrl: 'https://example.com',
  brandImage: 'https://api.bond-agency.com/wp-content/uploads/2019/05/bond_web_thumbnail_photo.jpg',
  brandTarget: '_self',
});



