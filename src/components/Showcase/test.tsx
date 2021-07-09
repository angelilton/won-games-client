import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Showcase from '.'

const props = {
  title: 'my title',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<ShowCase />', () => {
  it('should render without title', () => {
    renderWithTheme(
      <Showcase games={props.games} highlight={props.highlight} />
    )

    expect(
      screen.queryByRole('heading', { name: /my title/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })

  it('should render full showcase', () => {
    renderWithTheme(
      <Showcase
        title={props.title}
        games={props.games}
        highlight={props.highlight}
      />
    )

    expect(
      screen.queryByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()
  })
})
