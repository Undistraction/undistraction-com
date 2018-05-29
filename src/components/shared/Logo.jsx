import { api } from 'cssapi'
import React from 'react'
import styled from 'styled-components'
import fixAspectRatio from '../styles/mixins/fixAspectRatio'

const Layout = styled.div`
  ${fixAspectRatio(1, 1)};

  /* Have to use an id instead of a classname as SVG doesn't support classes   for targeting gradients */
  #logoGrad {
    .gradientStart {
      ${api({
        color: `c:backgroundInvertedStart`,
      })};
    }

    .gradientEnd {
      ${api({
        color: `c:backgroundInvertedEnd`,
      })};
    }
  }

  svg path {
    fill: url(#logoGrad);
  }
`

const Logo = () => (
  <Layout>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      preserveAspectRatio="xMinYMin meet"
      xmlSpace="preserve"
      viewBox="0 0 100 100"
    >
      <title>Skull Logo</title>
      <defs>
        <linearGradient id="logoGrad">
          <stop offset="0" className="gradientStart" />
          <stop offset="1" className="gradientEnd" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="50" />
    </svg>
  </Layout>
)

export default Logo
