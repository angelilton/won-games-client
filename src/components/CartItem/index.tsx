import * as S from './styles'

export type CartItemProps = {
  img: string
  title: string
  price: string
}

const CartItem = ({ img, title, price }: CartItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
  </S.Wrapper>
)

export default CartItem
