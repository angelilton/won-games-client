import styled from 'styled-components'

import * as OrderItemStyles from 'components/OrderItem/styles'

export const Wrapper = styled.div`
  ${OrderItemStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
