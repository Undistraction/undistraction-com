import React from 'react'
import styled from 'styled-components'
import HLayout from '../../../shared/layouts/HLayout'
import circle from '../../../styles/mixins/circle'

const CreditIcon = styled.span`
  align-self: center;
  transition: all 1.3s ease-in-out;
  ${circle([8, 8, 12])};
`

const Layout = styled(HLayout)`
  align-items: baseline;
  justify-content: center;
`

const Credit = () => (
  <Layout spacing="tiny">
    <CreditIcon />
  </Layout>
)

export default Credit
