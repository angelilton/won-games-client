import styled, { css } from 'styled-components'
import { checkboxProps } from '.'

export const Wrapper = styled.main``

export const Label = styled.label<Pick<checkboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
