import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    renderWithTheme(<Footer />)

    //contact
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument()

    //follow us
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument()

    //links
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument()

    //location
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument()
  })
})
