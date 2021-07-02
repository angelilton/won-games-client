import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({ label, labelFor, ...props }: TextFieldProps) => (
  <S.Wrapper>
    <S.Label htmlFor={labelFor}>{label}</S.Label>
    <S.InputWrapper>
      <S.Input type="text" {...props} />
    </S.InputWrapper>
  </S.Wrapper>
)

export default TextField
