import 'server.mock'
import { customRender } from 'utils/test-utils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import FormForgotPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<FormForgotPassword />', () => {
  it('should render the form correct ', () => {
    customRender(<FormForgotPassword />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send e-mail/i })
    ).toBeInTheDocument()
  })

  it('should validate email field before to request', async () => {
    customRender(<FormForgotPassword />)

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid')

    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should receive the success request by API', async () => {
    customRender(<FormForgotPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'valid@email.com'
    )

    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/You just received an email!/i)
    ).toBeInTheDocument()
  })

  it('should show an inexistent email error', async () => {
    customRender(<FormForgotPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'false@email.com'
    )

    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/This email does not exist/i)
    ).toBeInTheDocument()
  })
})
