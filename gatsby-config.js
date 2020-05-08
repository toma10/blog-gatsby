const path = require("path")

module.exports = {
  siteMetadata: {
    title: "John Doe Writes",
    titleTemplate: "%s | John Doe Writes",
    subtitle: "Just personal thoughts...",
    description: "John Deo's personal blog",
    url: "johndoewrites.io",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "John Doe Writes",
        short_name: "JDW",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#000",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: path.resolve(__dirname, "src"),
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-plugin-netlify-cms",
  ],
}
