import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import GameInfo from '.'

const props = {
  id: 'id_01',
  title: 'my game title',
  description: 'game description',
  price: 220.99
}

describe('<GameInfo />', () => {
  it('should render game information', () => {
    customRender(<GameInfo {...props} />)

    expect(screen.getByRole('heading', { name: /my game title/i }))
    expect(screen.getByText(/220.99/i))
    expect(screen.getByText(/game description/i))
  })

  it('should render buttons', () => {
    customRender(<GameInfo {...props} />)

    expect(screen.getByRole('button', { name: /add to cart/i }))
    expect(screen.getByRole('button', { name: /wishlist/i }))
  })
})
