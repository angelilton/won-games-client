import Image from 'next/image'
import { Download } from '@styled-icons/boxicons-solid/Download'
import { CcMastercard, CcVisa } from 'styled-icons/fa-brands'

import * as S from './styles'
import { useCart } from 'hooks/use-cart'

export type PaymentInfoProps = {
  number: string
  flag: string
  purchaseDate: string
}

export type OrderItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const OrderItem = ({
  id,
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: OrderItemProps) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <Image src={img} alt={title} width={150} height={70} />
        </S.ImageBox>

        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                aria-label={`Get ${title} here`}
                target="_blank"
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Group>
            <S.Price>{price}</S.Price>
            {isInCart(id) && (
              <S.Remove onClick={() => removeFromCart(id)}> Remove</S.Remove>
            )}
          </S.Group>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            {paymentInfo.flag === 'mastercard' ? (
              <CcMastercard size={30} aria-label="mastercard" />
            ) : (
              <CcVisa size={30} aria-label="visa" />
            )}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}
export default OrderItem
