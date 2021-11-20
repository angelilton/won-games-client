import { useQueryGames } from 'graphql/queries/games'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import * as S from './styles'
import getImageUrl from 'utils/getImageUrl'

export type ExploreTempleteProps = {
  filterItems: ItemProps[]
  games?: GameCardProps[]
}

const ExploreTemplate = ({ filterItems }: ExploreTempleteProps) => {
  const { data, loading, fetchMore } = useQueryGames()

  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 9, start: data?.games.length }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={() => {
            return
          }}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            <Grid>
              {data?.games.map((item) => (
                <GameCard
                  key={item.slug}
                  title={item.name}
                  developer={item.developers[0].name}
                  img={`${getImageUrl(item.cover!.url)}`}
                  {...item}
                />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>show more</p>
              <KeyboardArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default ExploreTemplate
