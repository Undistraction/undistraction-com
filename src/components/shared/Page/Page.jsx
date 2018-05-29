import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import api from '../../styles/api'
import VLayout from '../layouts/VLayout'

export const Body = styled(VLayout)`
  position: relative;
  ${api({})};
`

export const Nav = styled.div`
  ${api({
    paddingH: [`1ru`, `1ru`, `1ru`, 0],
  })};
`

const Page = ({ title, children, imageSizes, nav }) => (
  <VLayout>
    {nav && <Nav>{nav}</Nav>}
    <Body>{children}</Body>
    {nav && <Nav>{nav}</Nav>}
  </VLayout>
)

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  imageSizes: PropTypes.object,
  nav: PropTypes.node,
}

Page.defaultProps = {
  children: [],
  imageSizes: null,
  nav: null,
}

export default Page
