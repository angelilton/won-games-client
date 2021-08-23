import styled, { css } from 'styled-components'

export const CardList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.black};
    background: ${theme.colors.lightGray};
    padding: 1.3rem ${theme.spacings.xsmall};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }

    svg {
      color: ${theme.colors.gray};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`
