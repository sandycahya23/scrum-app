/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()

const plugins = require("./config/plugins")

module.exports = {
  /* Your site config here */
  plugins,
}
console.log(JSON.stringify(plugins))
