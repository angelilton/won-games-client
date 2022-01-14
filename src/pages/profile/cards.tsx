import protectedRouter from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import CardsList, { CardsListProps } from 'components/CardsList'
import mockCards from 'components/PaymentOptions/mock'

export default function index({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRouter(context)

  return {
    props: {
      session,
      cards: mockCards
    }
  }
}
