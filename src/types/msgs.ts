export type MessageType = 'user' | 'my'

export type Message = {
  id: string
  value: string
  type: MessageType
}
