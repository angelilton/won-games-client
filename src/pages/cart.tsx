import Cart, { CartProps } from 'templates/Cart'
import { GetServerSidePropsContext } from 'next'
import protectedRouter from 'utils/protected-routes'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRouter(context)

  return {
    props: {
      session,
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock
    }
  }
}
