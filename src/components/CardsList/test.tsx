import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardsList from '.'

import cardsMock from 'components/PaymentOptions/mock'

describe('<CartsList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText('visa')).toBeInTheDocument()
    expect(screen.getByLabelText('mastercard')).toBeInTheDocument()

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
