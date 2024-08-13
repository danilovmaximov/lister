import { api } from './api'

export async function testRequest(accessToken: string) {
  try {
    const { data } = await api.get<string>('/test', {
      params: {
        access_token: accessToken,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    if (error instanceof Error) {
      return error.message
    }
    return 'Error, watch browser console.'
  }
}
