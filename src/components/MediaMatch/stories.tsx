import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium">Only Mobile</MediaMatch>
)

export const Desktop: Story = () => (
  <MediaMatch greaterThan="medium">Only Desktop</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
