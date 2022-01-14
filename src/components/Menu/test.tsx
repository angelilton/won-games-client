import { fireEvent, screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    customRender(<Menu />)

    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/Shopping cart/i)).toHaveLength(2)
  })

  it('should handle the open/close mobile Menu', () => {
    customRender(<Menu />)

    // selecionar o nosso MenuFull
    const fullMenuElement = screen.getByLabelText(/mobile menu/i)

    // verificar se o menu tá escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    customRender(<Menu />)

    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.getByText(/log in now/i)).toBeInTheDocument()

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
  })

  it('should show wishLight and profile when logged in', () => {
    customRender(<Menu username="angel" />)

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })

  it('should not show sign ir or dropdownUser if loading', () => {
    customRender(<Menu username="angel" loading />)

    expect(screen.queryByText(/Search/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
  })
})
