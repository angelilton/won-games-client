import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import FormSignIn from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    customRender(<FormSignIn />)

    const emailField = screen.getByPlaceholderText('Email')
    const passwordField = screen.getByPlaceholderText('Password')
    const button = screen.getByText(/sign in now/i)

    expect(button).toBeInTheDocument()
    expect(emailField).toBeInTheDocument()
    expect(passwordField).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    customRender(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: 'Forgot your password?' })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    customRender(<FormSignIn />)
    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument()
  })
})
