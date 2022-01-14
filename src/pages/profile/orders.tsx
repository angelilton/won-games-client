import protectedRouter from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'

import ordersMock from 'components/OrdersList/mock'

export default function index({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRouter(context)

  return {
    props: {
      session,
      items: ordersMock
    }
  }
}
