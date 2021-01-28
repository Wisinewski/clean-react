import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  const sut = new AxiosHttpClient()
  return sut
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL and verb', async () => {
    const sut = makeSut()
    const url = faker.internet.url()
    await sut.post({ url })
    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
