import * as S from './styles'

export type checkboxProps = {
  label?: string
  labelFor?: string
}

const Checkbox = ({ label, labelFor = '' }: checkboxProps) => (
  <S.Wrapper>
    <input id={labelFor} type="checkbox" />
    {!!label && <label htmlFor={labelFor}>{label}</label>}
  </S.Wrapper>
)

export default Checkbox
