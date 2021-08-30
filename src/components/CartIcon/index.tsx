import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'

import * as S from './styles'

export type Quantity = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: Quantity) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="cart items">{quantity}</S.Badge>}
    <ShoppingCart size={24} aria-label="Shopping cart" />
  </S.Wrapper>
)

export default CartIcon
