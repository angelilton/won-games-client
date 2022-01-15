import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import ProfileMenu from '.'

describe('<ProfileMenu />', () => {
  it('should render the heading', () => {
    customRender(<ProfileMenu />)

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })

  it('should render the menu with an active link', () => {
    customRender(<ProfileMenu activeLink="/profile/orders" />)

    expect(screen.getByRole('link', { name: /my orders/i })).toHaveStyle({
      color: '#FAFAFA',
      background: '#F231A5'
    })
  })
})
