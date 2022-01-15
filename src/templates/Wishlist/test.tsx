import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Wishlist from '.'

const props = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedTitle: 'You may like these games',
  recommendedGames: gamesMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    customRender(<Wishlist {...props} />)

    expect(screen.getByRole('heading', { name: /wishlist/i }))

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    customRender(
      <Wishlist
        recommendedTitle="You may like these games"
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /your wishlist is empty/i }))
  })
})
