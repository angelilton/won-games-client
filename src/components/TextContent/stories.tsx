import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'

import textMock from './mock'

export default {
  title: 'GamesPage/TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
