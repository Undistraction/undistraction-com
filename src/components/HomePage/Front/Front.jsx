import { api, scope } from 'cssapi'
import { withPrefix } from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'
import VLayout from '../../shared/layouts/VLayout'
import TextLink from '../../shared/links/TextLink'
import Logo from '../../shared/Logo'
import TitlePrimary from '../../shared/titles/TitlePrimary'
import flexHorizontal from '../../styles/mixins/flexHorizontal'
import flexVertical from '../../styles/mixins/flexVertical'
import spaceChildrenH from '../../styles/mixins/spaceChildrenH'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'

const Left = styled.div``

const Right = styled.footer`
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
    padding: `3ru`,
  })};
`

const Title = styled.div`
  ${flexHorizontal};
  ${spaceChildrenH(scope`0.3ru`)};
  align-items: center;

  > *:first-child {
    ${api({
      width: {
        default: `1.3ru`,
        mediumUp: `2.2ru`,
      },
    })};
  }
`

const Footer = styled.footer`
  ${api({
    marginTop: scope`1ru`,
  })};
`

const Front = () => (
  <Layout>
    <Title>
      <Left>
        <Logo />
      </Left>
      <Right>
        <TitlePrimary>Undistraction</TitlePrimary>
      </Right>
    </Title>
    <Contact>
      <VLayout spacing="none">
        <TextLink to="mailTo:info@undistraction.com">
          info@undistraction.com
        </TextLink>
        <TextLink to="tel:+4407880600363">+44 (0)7880 600 363</TextLink>
        <Footer>
          <TextLink
            href={withPrefix(
              `/downloads/Pedr-Browne-Front-End-Designer-And-Developer-Resume.pdf`
            )}
            target="_blank"
          >
            [ Résumé ]
          </TextLink>
        </Footer>
      </VLayout>
    </Contact>
  </Layout>
)

export default Front
