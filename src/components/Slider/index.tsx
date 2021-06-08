import { ReactNode } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type sliderProps = {
    children: ReactNode
    settings: SliderSettings
}

const Slider = ({ children, settings }: sliderProps) => (
    <S.Wrapper>
        <SlickSlider {...settings}>{children}</SlickSlider>
    </S.Wrapper>
)

export default Slider
