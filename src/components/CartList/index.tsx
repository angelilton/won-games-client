import Link from 'next/link'
import { useCart } from 'hooks/use-cart'
import Empty from 'components/Empty'
import Button from 'components/Button'
import OrderItem from 'components/OrderItem'
import Loader from 'components/Loader'

import * as S from './styles'

const CartList = ({ hasButton = false }) => {
  const { total, items, loading } = useCart()

  if (loading) {
    return (
      <S.Loading>
        <Loader />
      </S.Loading>
    )
  }

  return (
    <S.Wrapper>
      {items.length ? (
        <>
          <S.GameList>
            {items.map((item) => (
              <OrderItem key={item.title} {...item} />
            ))}
          </S.GameList>
          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>

            {hasButton && (
              <Link href="/cart" passHref>
                <Button>Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers."
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
