import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Link from 'next/link'
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
      <S.ButtonWrapper>
        <Link href="/forgot-password" passHref>
          <Button minimal size="medium" as="a">
            Change my password
          </Button>
        </Link>
        <Button size="medium">Save</Button>
      </S.ButtonWrapper>
    </S.Form>
  </>
)

export default FormProfile
