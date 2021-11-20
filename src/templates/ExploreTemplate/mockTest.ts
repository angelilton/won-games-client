import { QUERY_GAMES } from 'graphql/queries/games'
import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: concatPagination()
      }
    }
  }
})

export const gamesMock = {
  request: {
    query: QUERY_GAMES
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'Sample Game',
          slug: 'sample-game',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg'
          },
          __typename: 'Game'
        }
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 9, start: 1 }
  },
  result: {
    data: {
      games: [
        {
          id: '2',
          name: 'Fetch More Game',
          slug: 'fetch-more',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg'
          },
          __typename: 'Game'
        }
      ]
    }
  }
}
