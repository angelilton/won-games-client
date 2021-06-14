import { Story, Meta } from '@storybook/react/types-6-0'
import BannerSlider, { BannerSliderProps } from '.'

import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <BannerSlider {...args} />
)
