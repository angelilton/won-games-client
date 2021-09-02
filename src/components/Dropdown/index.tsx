import { useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  nav: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ nav, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Nav onClick={() => setIsOpen(!isOpen)}>{nav}</S.Nav>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
