import { BannerProps } from 'components/Banner'
import Highlight, { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

import Container from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'

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
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighLight} />
        <GameCardSlider items={mostPopularCards} />
      </S.SectionMostPopular>

      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>

        <GameCardSlider items={upcommingCards} />
        <Highlight {...upcommingHighLight} />
        <GameCardSlider items={upcommingMoreCards} />
      </S.SectionUpcoming>

      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>

        <Highlight {...freeHighLight} />
        <GameCardSlider items={freeCards} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
