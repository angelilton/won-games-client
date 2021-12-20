import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

const CartDropdown = () => {
  const { items } = useCart()

  return (
    <S.Wrapper>
      <Dropdown nav={<CartIcon />}>
        {items.length ? (
          <CartList hasButton />
        ) : (
          <S.Empty>
            <h3>Your cart is empty</h3>
          </S.Empty>
        )}
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown
