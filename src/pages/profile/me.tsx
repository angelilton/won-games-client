import protectedRouter from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
import FormProfile, { FormProfileProps } from 'components/FormProfile'
import Profile from 'templates/Profile'
import { initializeApollo } from 'utils/apollo'
import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRouter(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })

  return {
    props: {
      session,
      username: data.me?.username,
      email: data.me?.email
    }
  }
}
