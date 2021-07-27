import Base from 'templates/Base'

import TextContent from 'components/TextContent'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImgProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  description: string
  gameInfo: GameInfoProps
  details: GameDetailsProps
  gallery?: GalleryImgProps[]
  upcomingGames: GameCardProps[]
  recommendedGames: GameCardProps[]
  upcomingHighlight: HighlightProps
}

const Game = ({
  cover,
  details,
  gallery,
  gameInfo,
  description,
  upcomingGames,
  recommendedGames,
  upcomingHighlight
}: GameTemplateProps) => (
  <Base>
    <S.Cover role="image" aria-label="cover" src={cover} />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGalley>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGalley>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionDetails>
        <GameDetails {...details} />
      </S.SectionDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
