import graphql from 'graphql'
import React from 'react'

const IndexLayout = () => <div>Hello</div>

IndexLayout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
}

export const query = graphql`
  query MainLayoutQuery {
    site {
      siteMetadata {
        data {
          owner
          title
          startYear
          showCredit
        }
        structure {
          resources {
            projects {
              title
              navTitle
              path
            }
            articles {
              title
              navTitle
              path
            }
          }
          pages {
            about {
              title
              navTitle
              path
            }
            home {
              title
              navTitle
              path
            }
          }
        }
      }
    }
  }
`

export default IndexLayout
