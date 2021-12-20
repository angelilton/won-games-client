import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { customRender } from 'utils/test-utils'

import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    customRender(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should handle open modal', () => {
    customRender(<Gallery items={mockItems.slice(0, 2)} />)

    //select modal
    const modal = screen.getByLabelText('modal')

    //check if modal is hidden
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    // //have to show modal if it is clicked
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle close modal', () => {
    customRender(<Gallery items={mockItems.slice(0, 2)} />)

    //select modal
    const modal = screen.getByLabelText('modal')

    //have to show modal if it is clicked
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    //have to hidden modal if close button is clicked
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when ESC is pressed', () => {
    const { container } = customRender(
      <Gallery items={mockItems.slice(0, 2)} />
    )

    //select modal
    const modal = screen.getByLabelText('modal')

    //have to show modal if it is clicked
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    //have to hidden modal if ESC is pressed
    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open modal with selected image', async () => {
    customRender(<Gallery items={mockItems.slice(0, 2)} />)

    // clicked by img
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    // have to show the same img is clicked
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
