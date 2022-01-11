import { gql } from '@apollo/client'

export const POST_REGISTER = gql`
  mutation MutationRegister($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
    }
  }
`
