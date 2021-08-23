import OrderItem, { OrderItemProps } from 'components/OrderItem'

import * as S from './styles'

export type CartListProps = {
  items: OrderItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <OrderItem key={item.title} {...item} />
    ))}

    <S.Footer>
      Total <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList
