import Auth from 'templates/Auth'
import { FormForgotPassword } from 'components/FormsLogin'

export default function ForgotPassword() {
  return (
    <Auth title="Request new password">
      <FormForgotPassword />
    </Auth>
  )
}
