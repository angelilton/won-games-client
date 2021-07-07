import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'
describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    const heading = screen.getByRole('heading', {
      name: /All your favorite games in one place/i
    })

    const subtitle = screen.getByRole('heading', {
      name: /won is the best and most complete gaming platform/i
    })

    const contentTitle = screen.getByRole('heading', { name: /auth title/i })

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(contentTitle).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
