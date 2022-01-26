import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ email, username }: FormProfileProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        label="Username"
        placeholder="Username"
        initialValue={username}
      />

      <TextField
        name="email"
        type="email"
        label="E-mail"
        initialValue={email}
        disabled
      />

      <TextField
        type="password"
        label="Password"
        name="password"
        placeholder="type your password"
      />

      <TextField
        type="password"
        label="New Password"
        name="new_password"
        placeholder="type your new password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </>
)

export default FormProfile
