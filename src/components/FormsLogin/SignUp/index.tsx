import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { POST_REGISTER } from 'graphql/mutations/register'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { FieldErrors, signUpValidate } from 'utils/validations'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { ButtonLoading } from 'components/Button/styles'
import {
  Email,
  Lock,
  AccountCircle,
  ErrorOutline
} from '@styled-icons/material-outlined'
import { FormErrorMessage, FormLink, FormWrapper } from '../styles'

const initialState = {
  username: '',
  email: '',
  password: ''
}

const FormSignUp = () => {
  const { push } = useRouter()
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UsersPermissionsRegisterInput>(
    initialState
  )

  const [createUser, { loading, error }] = useMutation(POST_REGISTER, {
    onError: () => {
      setFormError('username or e-mail had already been used!')
    },
    onCompleted: () => {
      !error && push('/sign-in')
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues({
      ...values,
      [field]: value
    })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
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
          name="username"
          placeholder="username"
          type="text"
          error={fieldError?.username}
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
        />

        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
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

        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <ButtonLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
