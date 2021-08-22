import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField label="Name" name="name" initialValue="John Doe" />

      <TextField
        type="email"
        label="E-mail"
        name="email"
        initialValue="johndoe@gmail.com"
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
