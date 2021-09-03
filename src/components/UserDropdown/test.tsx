import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render UserDropdown  correctly', () => {
    renderWithTheme(<UserDropdown username="angel" />)
    expect(screen.getByText('angel')).toBeInTheDocument()

    expect(screen.getByText('My profile')).toBeInTheDocument()
    expect(screen.getByText('Wishlist')).toBeInTheDocument()
    expect(screen.getByText('Sign out')).toBeInTheDocument()
  })
})
