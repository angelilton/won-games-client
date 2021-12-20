import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import CardsList from '.'

import cardsMock from 'components/PaymentOptions/mock'

describe('<CartsList />', () => {
  it('should render the heading', () => {
    customRender(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByLabelText('visa')).toBeInTheDocument()
    expect(screen.getByLabelText('mastercard')).toBeInTheDocument()

    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
