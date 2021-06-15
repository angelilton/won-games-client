import { BannerProps } from 'components/Banner'
import Highlight, { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

import Container from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

export type HomeTempleteProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularCards: GameCardProps[]
  upcommingCards: GameCardProps[]
  upcommingHighLight: HighlightProps
  upcommingMoreCards: GameCardProps[]
  freeCards: GameCardProps[]
  freeHighLight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularCards,
  mostPopularHighLight,
  upcommingHighLight,
  upcommingCards,
  upcommingMoreCards,
  freeHighLight,
  freeCards
}: HomeTempleteProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>

      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>

      <Highlight {...mostPopularHighLight} />
      <GameCardSlider items={mostPopularCards} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>

      <GameCardSlider items={upcommingCards} />
      <Highlight {...upcommingHighLight} />
      <GameCardSlider items={upcommingMoreCards} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeHighLight} />
      <GameCardSlider items={freeCards} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
