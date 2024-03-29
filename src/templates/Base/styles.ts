import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    flex: 1 0 auto;
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};

    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
