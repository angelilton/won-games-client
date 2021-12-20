import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walkabout',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render platform icons', () => {
    customRender(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i }))
    expect(screen.getByRole('img', { name: /windows/i }))
    expect(screen.getByRole('img', { name: /mac/i }))
  })

  it('should render  free rating when BR0', () => {
    customRender(<GameDetails {...props} />)

    expect(screen.getByText(/free/i))
  })

  it('should render  18+ rating when BR18', () => {
    customRender(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i))
  })

  it('should render the formatted date', () => {
    customRender(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020'))
  })

  it('should render a list of genres', () => {
    customRender(<GameDetails {...props} />)

    expect(screen.getByText('Role-playing'))
    expect(screen.getByText('Narrative'))
  })
})
