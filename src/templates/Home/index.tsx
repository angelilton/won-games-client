import { BannerProps } from 'components/Banner'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

import Container from 'components/Container'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type HomeTempleteProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularCards: GameCardProps[]
  upcomingCards: GameCardProps[]
  upcomingHighLight: HighlightProps
  freeCards: GameCardProps[]
  freeHighLight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularCards,
  mostPopularHighLight,
  upcomingHighLight,
  upcomingCards,
  freeHighLight,
  freeCards
}: HomeTempleteProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighLight}
      games={mostPopularCards}
    />

    <Showcase
      title="Upcoming"
      games={upcomingCards}
      highlight={upcomingHighLight}
    />

    <Showcase title="Free Games" highlight={freeHighLight} games={freeCards} />
  </Base>
)

export default Home
