import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import getImageUrl from 'utils/getImageUrl'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map(({ image, title, subtitle, button, ribbon }) => ({
    title,
    subtitle,
    img: getImageUrl(image?.url),
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
    ? games.map(({ name, slug, developers, cover, price }) => ({
        slug,
        price,
        title: name,
        developer: developers[0].name,
        img: getImageUrl(cover?.url)
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
        floatImage: highlight.floatImage?.url,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
}
