import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import VLayout from '../../shared/layouts/VLayout'

const Header = styled.div``

const Layout = styled(VLayout)`
  align-items: center;
  width: 100%;
  ${api({
    padding: scope`2.5ru 0 1ru`,
  })};

  ${Header} {
    ${api({
      width: [60, 70, 80],
    })};
  }
`

const SiteHeader = ({ title, pages }) => <Layout spacing="small" />

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired,

  pages: PropTypes.object.isRequired,
}

export default SiteHeader
