import Base from 'templates/Base'

import { GameInfoProps } from 'components/GameInfo'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
}

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <S.Cover role="image" aria-label="cover" src={cover} />
  </Base>
)

export default Game
