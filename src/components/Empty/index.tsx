import Image from 'next/image'
import Link from 'next/link'
import Button from 'components/Button'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <Image
      width={380}
      height={285}
      src="/img/empty.svg"
      alt="A gamer playing videogame"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
