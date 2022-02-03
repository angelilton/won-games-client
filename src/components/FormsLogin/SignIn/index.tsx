import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, SignInResponse } from 'next-auth/react'
import { FieldErrors, signInValidate } from 'utils/validations'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { ButtonLoading } from 'components/Button/styles'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'
import {
  ForgotPasswordLink,
  FormLink,
  FormWrapper,
  FormErrorMessage
} from '../styles'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ identifier: '', password: '' })
  const [loading, setLoading] = useState(false)

  const { push, query } = useRouter()

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
      setFieldError(erros)
      setLoading(false)
      return
    }

    setFieldError({})

    //sign-in
    const result: SignInResponse = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result.url) {
      return push(result.url)
    }

    setLoading(false)

    // jogar o erro
    if (result.ok === false) {
      setFieldError({
        identifier: 'check your email',
        password: 'check your password'
      })
    }
    setFormError('e-mail or password is invalid')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormErrorMessage>
          <ErrorOutline /> {formError}
        </FormErrorMessage>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.identifier}
          onInputChange={(v) => handleInput('identifier', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <Link href={'/forgot-password'} passHref>
          <ForgotPasswordLink>Forgot your password?</ForgotPasswordLink>
        </Link>
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <ButtonLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}
export default FormSignIn
