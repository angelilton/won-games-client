import Empty from 'components/Empty'
import Heading from 'components/Heading'
import OrderList, { OrderItemProps } from 'components/OrderItem'

import * as S from './styles'

export type OrdersListProps = {
  items?: OrderItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items.length ? (
      items.map((item) => <OrderList key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
