import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import Heading from 'components/Heading'
import CartButton from 'components/CartButton'
import { FavoriteBorder } from '@styled-icons/material-outlined'
import formatPrice from 'utils/format-price'

import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasTitle />
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
