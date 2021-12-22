import { useCart } from 'hooks/use-cart'
import Button, { ButtonProps } from 'components/Button'
import {
  AddShoppingCart,
  RemoveShoppingCart
} from 'styled-icons/material-outlined'

type CartButtonProps = {
  id: string
  hasTitle?: boolean
} & Pick<ButtonProps, 'size'>

function CartButton({ id, hasTitle = false, size = 'small' }: CartButtonProps) {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const btnText = isInCart(id) ? 'Remove from cart' : 'add to cart'

  return (
    <Button
      size={size}
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    >
      {hasTitle && btnText}
    </Button>
  )
}

export default CartButton
