import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

async function protectedRouter(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, {
      Location: `/sign-in?callbackUrl=${context.resolvedUrl}`
    })
    context.res.end()
  }

  return session
}

export default protectedRouter
