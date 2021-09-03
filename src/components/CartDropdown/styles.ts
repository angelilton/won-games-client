import styled, { css } from 'styled-components'

import { Wrapper as CartWrapperStyles } from 'components/CartList/styles'

export const Wrapper = styled.div`
  ${CartWrapperStyles} {
    width: 40rem;
  }
`

export const Empty = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-self: center;
    text-align: center;

    width: 20rem;
    margin: ${theme.spacings.large};
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
  `}
`
