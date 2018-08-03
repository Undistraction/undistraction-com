import PropTypes from 'prop-types'
import React from 'react'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    // eslint-disable-next-line global-require, import/no-unresolved, import/no-webpack-loader-syntax
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const html = ({
  htmlAttributes,
  bodyAttributes,
  body,
  preBodyComponents,
  postBodyComponents,
  headComponents,
}) => (
  // eslint-disable-next-line jsx-a11y/html-has-lang
  <html lang="en" {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <link rel="icon" href="favicons/favicon.ico?v=2" />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
)

html.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  htmlAttributes: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  bodyAttributes: PropTypes.object,
  body: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  preBodyComponents: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  postBodyComponents: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  headComponents: PropTypes.array.isRequired,
}

html.defaultProps = {
  htmlAttributes: {},
  bodyAttributes: {},
}

export default html
