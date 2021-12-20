import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { customRender } from 'utils/test-utils'

import PaymentOptions from '.'
import cards from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    customRender(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByText(/4325/))
    expect(screen.getByText(/4326/))
    expect(screen.getByText(/add a new credit card/i))
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    customRender(<PaymentOptions cards={cards} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    customRender(<PaymentOptions cards={cards} handlePayment={handlePayment} />)

    userEvent.click(screen.getByText(/4325/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })

  it('should select card when clicking on credit card', async () => {
    customRender(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    userEvent.click(screen.getByText(/4325/))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/ })).toBeChecked()
    })
  })
})
