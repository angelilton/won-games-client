import { parseQueryStringToFilter, parseQueryStringToWhere } from '.'

const filterItems = [
  { name: 'price_lte', type: 'radio' },
  { name: 'platforms', type: 'checkbox' },
  { name: 'developers', type: 'checkbox' },
  { name: 'sort', type: 'radio' }
]

const queryString = {
  price_lte: 100,
  platforms: ['windows', 'linux'],
  developers: 'RockStar Games',
  sort: 'price:asc'
}

describe('parseQueryStringToWhere()', () => {
  it('should parse queryString to where format', () => {
    const parseQuery = parseQueryStringToWhere({ queryString, filterItems })

    expect(parseQuery).toStrictEqual({
      price_lte: 100,
      platforms: { name_contains: ['windows', 'linux'] },
      developers: { name_contains: 'RockStar Games' }
    })
  })
})

describe('parseQueryStringToFilter()', () => {
  it('should parse queryString to filter values format', () => {
    const parseQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parseQuery).toStrictEqual({
      price_lte: 100,
      platforms: ['windows', 'linux'],
      developers: ['RockStar Games'],
      sort: 'price:asc'
    })
  })
})
