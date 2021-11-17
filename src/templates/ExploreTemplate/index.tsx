import { useQuery } from '@apollo/client'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

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

const ExploreTemplate = ({ filterItems }: ExploreTempleteProps) => {
  const { data, loading, fetchMore } = useQuery<
    QueryGames,
    QueryGamesVariables
  >(QUERY_GAMES, {
    variables: { limit: 15 }
  })

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
                  img={`http://localhost:1337${item.cover!.url}`}
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
