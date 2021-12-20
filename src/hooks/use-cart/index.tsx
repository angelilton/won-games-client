import { useQueryGames } from 'graphql/queries/games'
import { createContext, useContext, useEffect, useState } from 'react'
import formatPrice from 'utils/format-price'
import { getStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

type CartItemProps = {
  id: string
  img: string | null
  title: string
  price: string
}

export type cartContextData = {
  items: CartItemProps[]
  quantity: number
  total: string
}

export type CartProviderProps = {
  children: React.ReactNode
}

export const cartContextDefaultValue = {
  items: [],
  quantity: 0,
  total: '$0.00'
}

const CartContext = createContext<cartContextData>(cartContextDefaultValue)

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)
    if (data) setCartItems(data)
  }, [])

  // query games by id from cart
  const { data } = useQueryGames({
    skip: !cartItems.length,
    variables: {
      where: {
        id: cartItems
      }
    }
  })

  const totalCart = data?.games.reduce((acc, { price }) => {
    return acc + price
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(totalCart || 0)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
