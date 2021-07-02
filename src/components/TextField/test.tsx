import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

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
