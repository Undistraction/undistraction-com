const validatedConfig = require(`./src/config/validatedConfig`)
const sourceFileSystem = require(`./src/config/plugins/sourceFilesystem`)

const config = validatedConfig()

// -----------------------------------------------------------------------------
// Define Plugins Used
// -----------------------------------------------------------------------------

const plugins = [sourceFileSystem(`/pages`)]

module.exports = {
  // pathPrefix: '/example',
  siteMetadata: config,
  plugins,
}
