import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import * as S from './styles'

export type ExploreTempleteProps = {
  filterItems: ItemProps[]
  games?: GameCardProps[]
}

const ExploreTemplate = ({ filterItems, games }: ExploreTempleteProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={() => {
          return
        }}
      />
      <section>
        <Grid>
          {games?.map((item) => (
            <GameCard key={item.title} {...item} />
          ))}
        </Grid>

        <S.ShowMore role="button">
          <p>show more</p>
          <KeyboardArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default ExploreTemplate
