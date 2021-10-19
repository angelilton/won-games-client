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

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map(({ name, slug, developers, cover, price }) => ({
        slug,
        price,
        title: name,
        developer: developers[0].name,
        img: `http://localhost:1337${cover?.url}`
      })),
      filterItems: filterItemsMock
    }
  }
}
