import Link from 'next/link'
import OrderItem, { OrderItemProps } from 'components/OrderItem'

import * as S from './styles'
import Button from 'components/Button'

export type CartListProps = {
  items: OrderItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <OrderItem key={item.title} {...item} />
    ))}

    <S.Footer>
      {!hasButton && <span>Total:</span>}

      <S.Total>{total}</S.Total>

      {hasButton && (
        <Link href="/cart" passHref>
          <Button>Buy now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList
