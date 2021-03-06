import { css } from 'styled-components'

const insetBorder = api => css`
  ::before {
    content: '';
    position: absolute;
    z-index: 0;
    display: none;
    ${api({
      offset: `0.5ru`,
      border: `1px solid c:borderColor`,
      borderRadius: `0.2ru`,
    })};

    ${api.mq(`largeUp`, {
      display: `block`,
    })};
  }
`

export default insetBorder
