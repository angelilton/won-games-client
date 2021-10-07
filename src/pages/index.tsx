import { initializeApollo } from 'utils/apollo'

import Home, { HomeTempleteProps } from 'templates/Home'

import cardsMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

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

  const {
    data: { banners, newGames, upComingGames, freeGames }
  } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })
  console.log(freeGames)

  // retorno dos dados
  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: banner.image?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon?.text,
          ribbonColor: banner.ribbon?.color,
          ribbonSize: banner.ribbon?.size
        })
      })),
      newGames: newGames.map((card) => ({
        tittle: card.name,
        slug: card.slug,
        developer: card.developers[0].name,
        img: card.cover?.url,
        price: card.price
      })),
      mostPopularHighLight: highlightMock,
      mostPopularCards: cardsMock,
      upcomingCards: upComingGames.map((card) => ({
        title: card.name,
        slug: card.slug,
        developer: card.developers[0].name,
        img: card.cover?.url,
        price: card.price
      })),
      upcomingHighLight: highlightMock,
      freeCards: freeGames.map((card) => ({
        title: card.name,
        slug: card.slug,
        developer: card.developers[0].name,
        img: card.cover?.url,
        price: card.price
      })),
      freeHighLight: highlightMock
    }
  }
}
