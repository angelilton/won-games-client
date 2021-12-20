import Link from 'next/link'
import { useCart } from 'hooks/use-cart'
import OrderItem from 'components/OrderItem'
import Button from 'components/Button'

import * as S from './styles'

const CartList = ({ hasButton = false }) => {
  const { total, items } = useCart()

  return (
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
}

export default CartList
