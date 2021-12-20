import { screen, waitFor } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    customRender(<Checkbox label="checkbox label" labelFor="userName" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute(
      'for',
      'userName'
    )

    //se o input e o label estao associados
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
  })

  it('should render with black label', () => {
    customRender(
      <Checkbox label="checkbox label" labelFor="userName" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyleRule(
      'color',
      '#030517'
    )
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    customRender(<Checkbox label="checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when isChecked is pass', async () => {
    const onCheck = jest.fn()

    customRender(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })
})

// screen.debug(screen.getByRole('heading', { name: /Checkbox/i })
