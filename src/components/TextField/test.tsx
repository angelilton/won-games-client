import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('should renders with Label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('should renders without Label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByText('Label')).not.toBeInTheDocument()
  })

  it('should renders with  placeholder', () => {
    renderWithTheme(<TextField placeholder="user name" />)

    expect(screen.getByPlaceholderText('user name')).toBeInTheDocument()
  })

  it('Render with Icon', () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })

  it('Render with Icon on the right side', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    const icon = screen.getByTestId('icon')
    expect(icon.parentElement).toHaveStyle({ order: 1 })
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField label="Label" labelFor="Field" id="Field" onInput={onInput} />
    )

    const text = 'this is my text'
    const input = screen.getByRole('textbox')

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })
})
