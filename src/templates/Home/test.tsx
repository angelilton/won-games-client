import 'match-media-mock'
import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import bannersMock from 'components/BannerSlider/mock'
import cardsMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannersMock,
  newGamesTitle: 'News',
  newGames: cardsMock,
  mostPopularTitle: 'Most Popular',
  mostPopularHighLight: highlightMock,
  mostPopularCards: cardsMock,
  upcomingTitle: 'Upcoming',
  upcomingCards: cardsMock,
  upcomingHighLight: highlightMock,
  freeCards: cardsMock,
  freeGamesTitle: 'Free Games',
  freeHighLight: highlightMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render banner & showcases', () => {
    customRender(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
