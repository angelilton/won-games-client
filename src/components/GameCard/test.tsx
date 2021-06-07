import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'cardGames.png',
    price: 'R$ 235,00'
}

describe('<GameCard />', () => {
    it('should render correctly', () => {
        //renderizar o GameCard
        renderWithTheme(<GameCard {...props} />)

        //verifiquem se o title e renderizado
        expect(
            screen.getByRole('heading', { name: /Population Zero/i })
        ).toBeInTheDocument()

        //verifiquem se o developer e renderizado
        expect(
            screen.getByRole('heading', { name: /Rockstar Games/i })
        ).toBeInTheDocument()

        //verifiquem se a imagem e renderizado
        expect(screen.getByRole('img')).toHaveAttribute('src', 'cardGames.png')
        expect(screen.getByRole('img')).toHaveAttribute(
            'alt',
            'Population Zero'
        )

        //verifiquem se price e renderizado
        expect(screen.getByText('R$ 235,00')).toBeInTheDocument()
    })

    it('should render a line-through in price when promotional', () => {
        renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

        expect(screen.getByText('R$ 235,00')).toHaveStyle({
            textDecoration: 'line-through'
        })

        expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
            textDecoration: 'line-through'
        })
    })
})
