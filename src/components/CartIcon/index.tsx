import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

export type Quantity = {
  quantity?: number
}

const CartIcon = () => {
  const { quantity } = useCart()

  return (
    <S.Wrapper>
      {quantity > 0 && <S.Badge aria-label="cart items">{quantity}</S.Badge>}
      <ShoppingCart size={24} aria-label="Shopping cart" />
    </S.Wrapper>
  )
}

export default CartIcon
