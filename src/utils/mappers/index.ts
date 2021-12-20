import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import formatPrice from 'utils/format-price'
import getImageUrl from 'utils/getImageUrl'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map(({ image, title, subtitle, button, ribbon }) => ({
    title,
    subtitle,
    img: `${getImageUrl(image?.url)}`,
    buttonLabel: button?.label,
    buttonLink: button?.link,
    ...(ribbon && {
      ribbon: ribbon?.text,
      ribbonColor: ribbon?.color,
      ribbonSize: ribbon?.size
    })
  }))
}

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return games
    ? games.map(({ id, name, slug, developers, cover, price }) => ({
        id,
        slug,
        title: name,
        price: formatPrice(price),
        developer: developers[0].name,
        img: `${getImageUrl(cover?.url)}`
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  return highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: highlight.background?.url,
        floatImage: `${getImageUrl(highlight.floatImage?.url)}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games?.map(({ name, id, cover, price }) => ({
        id,
        title: name,
        price: formatPrice(price),
        img: `${getImageUrl(cover?.url)}`
      }))
    : []
}
