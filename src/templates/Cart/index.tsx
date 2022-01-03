import CartList from 'components/CartList'
import Container from 'components/Container'
import Heading from 'components/Heading'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Base from 'templates/Base'

import * as S from './styles'

export type CartProps = Pick<PaymentOptionsProps, 'cards'>

const Cart = ({ cards }: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineColor="secondary" lineLeft size="medium">
          My cart
        </Heading>
        <S.Content>
          <CartList />
          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>
      </Container>
    </Base>
  )
}

export default Cart
