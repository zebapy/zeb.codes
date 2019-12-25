const path = require('path');
module.exports = {
  siteMetadata: {
    title: 'Zeb Pykosz',
    name: 'Zebhdiyah Pykosz',
    email: 'hello@zebpykosz.com',
    description:
      'Front-end/fullstack JS developer and UI designer. Employed as web developer at Middlebury College.',
    intro:
      'Front-end/fullstack JS developer and UI designer. Employed as web developer at [Middlebury College](https://github.com/middlebury). Wanna-be minimalist. Coffee disliker. Creator of [Fateseal](https://www.fateseal.com).',
    tagline: 'Front-end/fullstack JS developer and UI designer',
    gravatar:
      'https://en.gravatar.com/userimage/14820278/7a7abc448a6f29e03663ea4fb4897054.jpg?size=100'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: path.resolve('./src/components/layout.js')
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-33739058-1'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ]
};
