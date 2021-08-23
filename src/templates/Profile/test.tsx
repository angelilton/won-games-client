import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Profile from '.'

describe('<Profile />', () => {
  it('should render profile with ProfileMenu and children', () => {
    renderWithTheme(
      <Profile>
        <div>cards List</div>
      </Profile>
    )

    expect(screen.getByRole('heading', { name: /my profile/i }))
    expect(screen.getByText('My orders'))
    expect(screen.getByText('cards List'))
  })
})
