import protectedRouter from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import FormProfile from 'components/FormProfile'
import Profile from 'templates/Profile'

export default function Me() {
  return (
    <Profile>
      <FormProfile />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRouter(context)

  return {
    props: {
      session
    }
  }
}
