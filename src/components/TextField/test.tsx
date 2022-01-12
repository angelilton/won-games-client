import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { customRender } from 'utils/test-utils'

import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('should renders with Label', () => {
    customRender(<TextField label="Label" name="label" />)

    expect(screen.getByText('Label')).toBeInTheDocument()
  })

  it('should renders without Label', () => {
    customRender(<TextField />)

    expect(screen.queryByText('Label')).not.toBeInTheDocument()
  })

  it('should renders with  placeholder', () => {
    customRender(<TextField placeholder="user name" />)

    expect(screen.getByPlaceholderText('user name')).toBeInTheDocument()
  })

  it('Render with Icon', () => {
    customRender(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Render with Icon on the right side', () => {
    customRender(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      order: 1
    })
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()

    customRender(
      <TextField label="Label" name="Field" onInputChange={onInputChange} />
    )

    const text = 'this is my text'
    const input = screen.getByRole('textbox')

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })

    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()
    customRender(
      <TextField
        label="Label"
        name="Field"
        onInputChange={onInputChange}
        disabled
      />
    )

    expect(screen.getByRole('textbox')).toBeDisabled()

    userEvent.type(screen.getByRole('textbox'), 'this is my text')

    await waitFor(() => {
      expect(screen.getByRole('textbox')).not.toHaveValue('this is my text')
    })

    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('Renders with error', () => {
    customRender(
      <TextField
        label="Label"
        icon={<Email data-testid="icon" />}
        error="error message"
      />
    )

    expect(screen.getByText('error message')).toBeInTheDocument()
  })
})
