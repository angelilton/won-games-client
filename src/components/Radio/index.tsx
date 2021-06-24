import { InputHTMLAttributes } from 'react'
import { typeColor, RadioValue } from 'types/types'

import * as S from './styles'

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string
  labelFor?: string
  labelColor?: typeColor
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: RadioProps) => {
  const onChange = () => !!onCheck && onCheck(value)

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />

      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio
