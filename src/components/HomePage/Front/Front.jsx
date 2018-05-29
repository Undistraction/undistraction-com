import { api, scope } from 'cssapi'
import React from 'react'
import styled from 'styled-components'
import Logo from '../../shared/Logo'
import VLayout from '../../shared/layouts/VLayout'
import TextLink from '../../shared/links/TextLink'
import TitlePrimary from '../../shared/titles/TitlePrimary'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'

const Body = styled.div``

const Footer = styled.footer`
  text-align: center;
`

const Contact = styled.header`
  text-align: center;
  ${api({})};
`

const Layout = styled.section`
  ${flexVertical};
  ${spaceChildrenV(scope`1ru`)};
  align-items: center;
  justify-content: center;
  ${api({
    offset: 0,
    background: `c:backgroundStart`,
    padding: `3ru`,
  })};

  > *:first-child {
    ${api({
      maxWidth: `20ru`,
      width: scope`7ru`,
    })};
  }

  > *:last-child {
    ${api({
      paddingH: scope`1ru`,
    })};
  }
`

const Front = () => (
  <Layout>
    <Body>
      <Logo />
    </Body>
    <Footer>
      <TitlePrimary>Undistraction</TitlePrimary>
    </Footer>
    <Contact>
      <VLayout spacing="none">
        <TextLink to="mailTo:info@undistraction.com">
          info@undistraction.com
        </TextLink>
        <TextLink to="tel:+44(0)7880600363">+44 (0)7880 600 363</TextLink>
      </VLayout>
    </Contact>
  </Layout>
)

export default Front
