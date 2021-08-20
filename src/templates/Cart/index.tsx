import CartList, { CartListProps } from 'components/CartList'
import Container from 'components/Container'
import Empty from 'components/Empty'
import Heading from 'components/Heading'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Base from 'templates/Base'

import * as S from './styles'

export type CartProps = CartListProps & Pick<PaymentOptionsProps, 'cards'>

const Cart = ({ items, total, cards }: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineColor="secondary" lineLeft size="medium">
          My cart
        </Heading>
        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            hasLink
            title="Your cart is empty"
            description="Go back to the Store and explore great games and offers"
          />
        )}
      </Container>
    </Base>
  )
}

export default Cart
