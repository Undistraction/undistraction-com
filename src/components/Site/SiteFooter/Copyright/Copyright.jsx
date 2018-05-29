import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Layout = styled.p`
  position: relative;
  text-align: center;
`

const Copyright = ({ owner, dateRange }) => (
  <Layout>
    Site and contents &copy; {owner} {dateRange}
  </Layout>
)

Copyright.propTypes = {
  owner: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
}

export default Copyright
