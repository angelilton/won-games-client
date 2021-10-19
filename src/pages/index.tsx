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

  // retorno dos dados
  return {
    props: {
      revalidate: 60,
      banners: banners.map(({ image, title, subtitle, button, ribbon }) => ({
        title,
        subtitle,
        img: image?.url,
        buttonLabel: button?.label,
        buttonLink: button?.link,
        ...(ribbon && {
          ribbon: ribbon?.text,
          ribbonColor: ribbon?.color,
          ribbonSize: ribbon?.size
        })
      })),
      newGames: newGames.map(({ name, slug, developers, cover, price }) => ({
        slug,
        price,
        tittle: name,
        developer: developers[0].name,
        img: `http://localhost:1337${cover?.url}`
      })),
      mostPopularHighLight: highlightMock,
      mostPopularCards: cardsMock,
      upcomingCards: upComingGames.map(
        ({ name, slug, developers, cover, price }) => ({
          slug,
          price,
          title: name,
          developer: developers[0].name,
          img: `http://localhost:1337${cover?.url}`
        })
      ),
      upcomingHighLight: highlightMock,
      freeCards: freeGames.map(({ name, slug, developers, cover, price }) => ({
        slug,
        price,
        title: name,
        developer: developers[0].name,
        img: `http://localhost:1337${cover?.url}`
      })),
      freeHighLight: highlightMock
    }
  }
}
