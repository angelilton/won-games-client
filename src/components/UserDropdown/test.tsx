import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render UserDropdown  correctly', () => {
    customRender(<UserDropdown username="angel" />)
    expect(screen.getByText('angel')).toBeInTheDocument()

    expect(screen.getByText('My profile')).toBeInTheDocument()
    expect(screen.getByText('Wishlist')).toBeInTheDocument()
    expect(screen.getByText('Sign out')).toBeInTheDocument()
  })
})
