import { gql } from '@apollo/client'
import { BannerFragment } from 'graphql/fragments/banner'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }

    newGames: games(
      where: { release_date_lte: "2021-09-10" }
      sort: "release_date:desc"
      limit: 8
    ) {
      ...GameFragment
    }

    upComingGames: games(
      limit: 8
      where: { release_date_gt: "2021-08-08" }
      sort: "release_date:asc"
    ) {
      ...GameFragment
    }

    freeGames: games(limit: 8, where: { price: 0 }, sort: "release_date:desc") {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`
