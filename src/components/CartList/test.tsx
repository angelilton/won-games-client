import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 450,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 450,00')).toHaveStyle({
      color: '#F231A5'
    })
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 450,00" hasButton />)

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
  })
})
