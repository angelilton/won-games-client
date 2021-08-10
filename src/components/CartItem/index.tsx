import { Download } from '@styled-icons/boxicons-solid/Download'

import * as S from './styles'

export type CartItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
}

const CartItem = ({ img, title, price, downloadLink }: CartItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
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
  </S.Wrapper>
)

export default CartItem
