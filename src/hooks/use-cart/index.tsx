import { useQueryGames } from 'graphql/queries/games'
import { createContext, useContext, useEffect, useState } from 'react'
import formatPrice from 'utils/format-price'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'

const CART_KEY = 'cartItems'

type CartItemProps = {
  id: string
  img: string | null
  title: string
  price: string
}

export interface cartContextData {
  items: CartItemProps[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: (id: string) => void
  loading: boolean
}

export type CartProviderProps = {
  children: React.ReactNode
}

export const cartContextDefaultValue = {
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
}

const CartContext = createContext<cartContextData>(cartContextDefaultValue)

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  // get items from localStorage to set cartItems initial value
  useEffect(() => {
    const data = getStorageItem(CART_KEY)
    if (data) setCartItems(data)
  }, [])

  // query games to update context items
  const { data, loading } = useQueryGames({
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

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCart = (cartItems: string[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id: string) => {
    saveCart([...cartItems, id])
  }

  const removeFromCart = (id: string) => {
    const filterItems = cartItems.filter((itemId) => itemId !== id)
    saveCart(filterItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(totalCart || 0),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
