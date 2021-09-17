import Home, { HomeTempleteProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import cardsMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTempleteProps) {
  return <Home {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz update do lado do client)

export async function getServerSideProps() {
  // faz lógica
  // pode ser buscar dados numa API
  // fazer calculo|leitura de context

  // retorno dos dados
  return {
    props: {
      banners: bannersMock,
      newGames: cardsMock,
      mostPopularHighLight: highlightMock,
      mostPopularCards: cardsMock,
      upcommingCards: cardsMock,
      upcommingHighLight: highlightMock,
      upcommingMoreCards: cardsMock,
      freeCards: cardsMock,
      freeHighLight: highlightMock
    }
  }
}
