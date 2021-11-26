import Image from 'next/image'
import { Download } from '@styled-icons/boxicons-solid/Download'
import { CcMastercard, CcVisa } from 'styled-icons/fa-brands'

import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  purchaseDate: string
}

export type OrderItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const OrderItem = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: OrderItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
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
        <S.Price>{price}</S.Price>
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

export default OrderItem
