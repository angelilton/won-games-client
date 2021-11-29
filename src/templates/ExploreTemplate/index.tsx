import { useQueryGames } from 'graphql/queries/games'
import { useRouter } from 'next/router'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'
import Empty from 'components/Empty'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { ParsedUrlQueryInput } from 'querystring'
import getImageUrl from 'utils/getImageUrl'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

import * as S from './styles'

export type ExploreTempleteProps = {
  filterItems: ItemProps[]
}

const ExploreTemplate = ({ filterItems }: ExploreTempleteProps) => {
  const { push, query } = useRouter()
  const { data, loading, fetchMore, previousData } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  const hasMoreGames = (previousData?.games.length || 0) !== data?.games.length

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/explorer',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 9, start: data?.games.length }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.games.length ? (
            <>
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
              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="img/dots.svg"
                      alt="Loading more games..."
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>show more</p>
                      <KeyboardArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title="try again"
              description="We didn't find any games with this filter"
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default ExploreTemplate
