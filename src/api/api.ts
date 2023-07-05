import type { Message } from '@/types/msgs'
import { generateMsg } from '@/utils/msgs'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://numia.ru/api/',
  timeout: 2000
})

export const getMessages = async (offset: number): Promise<Message[]> => {
  const result = await instance.get('getMessages', {
    params: {
      offset
    }
  })
  return result.data.result.map((value: string) => generateMsg(value, 'user')).reverse()
}
