export interface IAuthData {
  isLogin: boolean
  username: string
  signin: (username: string) => void
  signout: () => void
}

type TStoredData = Pick<IAuthData, 'isLogin' | 'username'>

const LOCALSTORAGE_KEY = 'AuthData'

export class authData implements IAuthData {
  isLogin: boolean
  username = ''

  constructor() {
    console.log('constructor - authData')

    // Получаем информацию из localStorage
    const storage = localStorage.getItem(LOCALSTORAGE_KEY)

    if (storage === null) {
      this.isLogin = false
    } else {
      const storedData: TStoredData = JSON.parse(storage)
      this.isLogin = storedData.isLogin
      this.username = storedData.username
    }
  }

  signin(username: string) {
    this.isLogin = true
    this.username = username

    // Сохраняем информацию о пользователи в localStorage
    localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify({ isLogin: this.isLogin, username })
    )
  }

  signout() {
    this.isLogin = false
    this.username = ''
    // Сохраняем информацию о пользователи в localStorage
    localStorage.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify({ isLogin: this.isLogin, username: '' })
    )
  }
}
