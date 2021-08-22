import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Form = styled.form`
  ${({ theme }) => css`
    display grid;
    gap: ${theme.spacings.xsmall};
    max-width: 100%;

    > button {
      margin-top: ${theme.spacings.small};
    }


    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacings.small};

      > button {
        grid-column: 2;
        justify-self: end;
        margin-top: 0;
        height: 4rem;
        font-size: ${theme.font.sizes.small};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
      }
    `}

  `}
`
