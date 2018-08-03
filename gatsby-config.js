const validatedConfig = require(`./src/config/validatedConfig`)
const favicon = require(`./src/config/plugins/favicon`)
const remark = require(`./src/config/plugins/remark`)

const config = validatedConfig()

// -----------------------------------------------------------------------------
// Define Plugins Used
// -----------------------------------------------------------------------------

const plugins = [
  // SSR support for styled components
  `gatsby-plugin-sharp`,
  // Add support for image nodes using Sharp
  `gatsby-transformer-sharp`,
  // Audit page for accessibility issues
  // Toggle to check for accessiblity issues
  favicon(),
  remark(config),
]

module.exports = {
  // pathPrefix: '/example',
  siteMetadata: config,
  plugins,
}
