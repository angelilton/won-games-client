import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const { data: session, status } = useSession()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true)
    }
    return () => {
      setLoading(false)
    }
  }, [status])

  return (
    <S.Wrapper>
      <Container>
        <Menu username={session?.user?.name} loading={loading} />
      </Container>
      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
