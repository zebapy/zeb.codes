module.exports = {
  siteMetadata: {
    title:
      'Zeb Pykosz | Designer and Front-end web developer based in Middlebury, Vermont',
    name: 'Zebhdiyah Pykosz',
    email: 'hello@zebpykosz.com',
    description:
      'Portfolio of freelance web developer and designer based in Middlebury, Vermont - passionate about creating valuable experiences for the internet.',
    intro: '',
    gravatar:
      'https://en.gravatar.com/userimage/14820278/7a7abc448a6f29e03663ea4fb4897054.jpg?size=100'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-33739058-1'
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet'
  ]
};
