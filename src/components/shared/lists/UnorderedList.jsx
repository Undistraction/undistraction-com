import { api, scope } from 'cssapi'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import spaceChildrenV from '../../styles/mixins/spaceChildrenV'

const scaleMap = {
  default: `body`,
  small: `smallprint`,
}

const UnorderedList = styled.ul`
  ${spaceChildrenV(`0.5rem`)};

  ${p =>
    api({
      baseline: scope`s:${scaleMap[p.size]} 1`,
      paddingLeft: 0,
    })(p)};

  li {
    position: relative;
    list-style: none;
    padding-left: 0;
  }
`

UnorderedList.propTypes = {
  size: PropTypes.string,
}

UnorderedList.defaultProps = {
  size: `default`,
}

export default UnorderedList
