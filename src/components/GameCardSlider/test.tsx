import 'match-media-mock'
import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import items from './mock'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render 4 items', () => {
    const { container } = customRender(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    customRender(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/next games/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
