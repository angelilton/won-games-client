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
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularTitle: string
  mostPopularHighLight: HighlightProps
  mostPopularCards: GameCardProps[]
  upcomingTitle: string
  upcomingCards: GameCardProps[]
  upcomingHighLight: HighlightProps
  freeGamesTitle: string
  freeCards: GameCardProps[]
  freeHighLight: HighlightProps
}

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularTitle,
  mostPopularCards,
  mostPopularHighLight,
  upcomingTitle,
  upcomingHighLight,
  upcomingCards,
  freeGamesTitle,
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
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularTitle}
      highlight={mostPopularHighLight}
      games={mostPopularCards}
    />

    <Showcase
      title={upcomingTitle}
      games={upcomingCards}
      highlight={upcomingHighLight}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighLight}
      games={freeCards}
    />
  </Base>
)

export default Home
