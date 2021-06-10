import { render, screen } from '@testing-library/react'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
    it('should render the heading', () => {
        render(<GameCardSlider />)

        expect(
            screen.getByRole('heading', { name: /GameCardSlider/i })
        ).toBeInTheDocument()
    })
})
