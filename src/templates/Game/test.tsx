import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import Game, { GameTemplateProps } from '.'

import gameInfoMock from 'components/GameInfo/mock'
import galleryMock from 'components/Gallery/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import { GameDetailsProps } from 'components/GameDetails'

const props: GameTemplateProps = {
  cover: '/bgImage.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  upcomingGames: gamesMock,
  upcomingTitle: 'Upcoming games',
  upcomingHighlight: highlightMock,
  recommendedTitle: 'You may like these games',
  recommendedGames: gamesMock,
  details: gameDetailsMock as GameDetailsProps,
  description: `<h1>Custom HTML</h1>`
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Gallery', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Gallery" />
  }
}))

jest.mock('components/GameDetails', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameDetails" />
  }
}))

jest.mock('components/GameInfo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock GameInfo" />
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Game />', () => {
  it('should render template with components', () => {
    customRender(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
  })

  it('should not render gallery if no images', () => {
    customRender(<Game {...props} gallery={undefined} />)
    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render gallery if on mobile', () => {
    customRender(<Game {...props} />)

    expect(screen.queryByTestId('Mock Gallery')?.parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.queryByTestId('Mock Gallery')?.parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should rende the cover image', () => {
    customRender(<Game {...props} />)

    const cover = screen.getByRole('img', { name: /Borderlands 3/i })
      .parentElement

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
