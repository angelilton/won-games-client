import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the text and link to sign in', () => {
    customRender(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )
    expect(screen.getByText(/Already have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
  })

  it('should render form', () => {
    customRender(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })
})
