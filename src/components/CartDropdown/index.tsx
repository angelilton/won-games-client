import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { OrderItemProps } from 'components/OrderItem'
import * as S from './styles'

export type CartDropdownProps = {
  items: OrderItemProps[]
  total: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown nav={<CartIcon quantity={items.length} />}>
      <CartList hasButton items={items} total={total} />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
