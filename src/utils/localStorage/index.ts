const APP_KEY = 'WONGAMES'

export function getStorageItem(key: string) {
  //no next via server/static nao tem window
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data!)
}

export function setStorageItem(key: string, item: string[]) {
  //no next via server/static nao tem window
  if (typeof window === 'undefined') return

  const data = JSON.stringify(item)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}