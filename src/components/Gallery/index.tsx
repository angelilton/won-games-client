import { useEffect, useState } from 'react'
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import Slider, { SliderSettings } from 'components/Slider'
import { Close } from '@styled-icons/material-outlined/Close'

import * as S from './styles'

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />
}

export type GalleryImgProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImgProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleKeyUp({ key }: KeyboardEvent) {
      key === 'Escape' && setIsOpen(false)
    }
    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [isOpen])

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
            key={`thumb-${index}`}
            onClick={() => setIsOpen(true)}
          />
        ))}
      </Slider>
      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
