import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    customRender(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('img', { name: /a gamer playing videogame/i })
    ).toHaveAttribute('src', '/img/empty.svg')

    expect(
      screen.getByRole('heading', { name: /a simple title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/a simple description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /go back to store/i })
    ).toHaveAttribute('href', '/')
  })

  it('should not render link when hasLink is false', () => {
    customRender(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()
  })
})
