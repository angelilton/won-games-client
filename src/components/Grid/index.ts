import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.spacings.medium};
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    margin: ${theme.spacings.medium} 0;
  `}
`
