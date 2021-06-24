import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import userEvent from '@testing-library/user-event'

import Radio from '.'
import theme from 'styles/theme'

describe('<Radio />', () => {
  it('should render with white label', () => {
    renderWithTheme(<Radio label="radio" labelFor="check" value="anyValue" />)

    const label = screen.getByText('radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Radio label="radio" value="anyValue 1" labelColor="black" />
    )

    const label = screen.getByText('radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.black })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByLabelText('Radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" labelFor="Radio" />)

    const radio = screen.getByLabelText('Radio')

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(radio).toHaveFocus()
  })
})
