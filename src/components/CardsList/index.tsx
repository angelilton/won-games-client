import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import { CcMastercard, CcVisa } from 'styled-icons/fa-brands'

import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <S.CardList key={card.number}>
        {card.flag === 'mastercard' ? (
          <CcMastercard size={30} aria-label="mastercard" />
        ) : (
          <CcVisa size={30} aria-label="visa" />
        )}

        <span>{card.number}</span>
      </S.CardList>
    ))}
  </>
)

export default CardsList
