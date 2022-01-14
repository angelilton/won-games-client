import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, SignInResponse } from 'next-auth/react'
import { FieldErrors, signInValidate } from 'utils/validations'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { ButtonLoading } from 'components/Button/styles'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import * as S from './styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [filedError, setFiledError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ identifier: '', password: '' })
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  console.log(filedError)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    //loading
    setLoading(true)

    //validate if all filed is right
    const erros = signInValidate(values)

    if (Object.keys(erros).length) {
      setFiledError(erros)
      setLoading(false)
      return
    }

    setFiledError({})

    //sign-in
    const result: SignInResponse = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result.url) {
      return push(result.url)
    }

    setLoading(false)

    // jogar o erro
    if (result.ok === false) {
      setFiledError({
        identifier: 'check your email',
        password: 'check your password'
      })
    }
    setFormError('e-mail or password is invalid')
  }

  return (
    <S.Wrapper>
      {!!formError && (
        <S.ErrorMessage>
          <ErrorOutline /> {formError}
        </S.ErrorMessage>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={filedError?.identifier}
          onInputChange={(v) => handleInput('identifier', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={filedError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <ButtonLoading /> : <span>Sign in now</span>}
        </Button>

        <S.FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </S.FormLink>
      </form>
    </S.Wrapper>
  )
}
export default FormSignIn
