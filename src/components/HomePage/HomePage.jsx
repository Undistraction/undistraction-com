import { api } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import MarkdownContent from '../../components/shared/MarkdownContent'
import {
  markdownItemHTMLAst,
  markdownItemImageSizes,
} from '../helpers/markdown'
import { homePageMetadata, homePageTitle } from '../helpers/siteMetadata'
import Metadata from '../shared/Metadata'
import Page from '../shared/Page'
import Front from './Front/Front'

const TextContent = styled.div`
  margin: 0 auto;
  ${api({
    maxWidth: 900,
    paddingH: {
      default: `1ru`,
      'mediumUp+100': 0,
    },
  })};
`

const Layout = styled.div`
  ${api({})};
`

const HomePage = ({ data }) => (
  <Page title={homePageTitle(data)} imageSizes={markdownItemImageSizes(data)}>
    <h1>Hello</h1>
  </Page>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage
