module.exports = {
  siteMetadata: {
    title: "UN World Data Forum",
    description:
      "The UN World Data Forum 2018 will take place 22-24 October 2018 in Dubai, United Arab Emirates.",
    siteUrl: "https://www.undataforum.org"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-autolink-headers", "gatsby-remark-smartypants"]
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-profiles",
    "gatsby-plugin-github-edit-url",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet"
  ]
};
