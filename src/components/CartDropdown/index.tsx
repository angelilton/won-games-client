import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { OrderItemProps } from 'components/OrderItem'
import * as S from './styles'

export type CartDropdownProps = {
  items?: OrderItemProps[]
  total?: string
}

const CartDropdown = ({ items = [], total = 'free' }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown nav={<CartIcon />}>
      {items.length ? (
        <CartList hasButton items={items} total={total} />
      ) : (
        <S.Empty>
          <h3>Your cart is empty</h3>
        </S.Empty>
      )}
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
