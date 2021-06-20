import { typeColor } from 'types/types'
import * as S from './styles'

export type checkboxProps = {
  label?: string
  labelFor?: string
  labelColor?: typeColor
}

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: checkboxProps) => (
  <S.Wrapper>
    <input id={labelFor} type="checkbox" />
    {!!label && (
      <S.Label htmlFor={labelFor} labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)

export default Checkbox
