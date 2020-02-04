const path = require('path');
module.exports = {
  siteMetadata: {
    title: 'Zeb Pykosz',
    titleTemplate: '%s - Zeb Pykosz',
    name: 'Zebhdiyah Pykosz',
    email: 'hello@zebpykosz.com',
    twitterUsername: '@zebhdiyah',
    url: 'https://zeb.codes/',
    description:
      'Front-end/fullstack JS developer and UI designer. Employed as web developer at Middlebury College.',
    intro:
      'Front-end/fullstack JS developer and UI designer. Employed as web developer at [Middlebury College](https://github.com/middlebury). Wanna-be minimalist. Coffee disliker. Creator of [Fateseal](https://www.fateseal.com).',
    tagline: 'Front-end/fullstack JS developer and UI designer',
    gravatar:
      'https://en.gravatar.com/userimage/14820278/7a7abc448a6f29e03663ea4fb4897054.jpg?size=100',
    // TODO: set this default seo image up
    image: ''
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: path.resolve('./src/components/layout')
        },

        plugins: ['gatsby-remark-unwrap-images', 'gatsby-remark-images'],

        gatsbyRemarkPlugins: [
          'gatsby-remark-unwrap-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    'gatsby-transformer-yaml',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-33739058-1'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [require('tailwindcss')]
      }
    },

    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true
      }
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout')
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
};
