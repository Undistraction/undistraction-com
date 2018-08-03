import PropTypes from 'prop-types'
import React from 'react'
import { markdownItemImageSizes } from '../helpers/markdown'
import { homePageTitle } from '../helpers/siteMetadata'
import Page from '../shared/Page'

const HomePage = ({ data }) => (
  <Page title={homePageTitle(data)} imageSizes={markdownItemImageSizes(data)}>
    <h1>Hello</h1>
  </Page>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage
