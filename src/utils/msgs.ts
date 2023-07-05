import { type MessageType } from '@/types/msgs'
import { v4 as uuid } from 'uuid'

export const generateMsg = (value: string, type: MessageType) => ({
  value,
  type,
  id: uuid()
})
