import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'

import ExploreTemplate, {
  ExploreTempleteProps
} from 'templates/ExploreTemplate'

import filterItemsMock from 'components/ExploreSidebar/mock'

export default function index(props: ExploreTempleteProps) {
  return <ExploreTemplate {...props} />
}

//generation static page after the time pass to revalidate
export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 15 }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
