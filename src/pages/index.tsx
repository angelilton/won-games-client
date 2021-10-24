import { initializeApollo } from 'utils/apollo'

import Home, { HomeTempleteProps } from 'templates/Home'

import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTempleteProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz update do lado do client)

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = '2021-09-09' // new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upComingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: TODAY }
  })

  // retorno dos dados
  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularTitle: sections?.popularGames?.title,
      mostPopularHighLight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularCards: gamesMapper(sections!.popularGames!.games),
      upcomingTitle: sections?.upcomingGames?.title,
      upcomingCards: gamesMapper(upComingGames),
      upcomingHighLight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeCards: gamesMapper(freeGames),
      freeHighLight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
