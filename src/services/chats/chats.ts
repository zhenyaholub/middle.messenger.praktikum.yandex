import { CHATS_URL } from '../../utils/endpoints'
import { HTTPTransport } from '../../utils/httpTransport'

const chatsApiInstance = new HTTPTransport(CHATS_URL)

export class ChatsAPI {
  async get () {
    return await chatsApiInstance.get()
  }

  async create (title: string) {
    return await chatsApiInstance.post('', { data: { title } })
  }

  async delete (chatId: number) {
    return await chatsApiInstance.delete('', { data: { chatId } })
  }

  async getFiles (chatId: number) {
    return await chatsApiInstance.get(`/${chatId}/files`, {})
  }

  async getArchive () {
    return await chatsApiInstance.get('/archive', {})
  }

  async archiveChat (chatId: number) {
    return await chatsApiInstance.post('/archive', { data: { chatId } })
  }

  async unarchiveChat (chatId: number) {
    return await chatsApiInstance.post('/unarchive', { data: { chatId } })
  }

  async getCommonChat (chatId: number) {
    return await chatsApiInstance.get(`/${chatId}/common`, {})
  }

  async getChatUsers (chatId: number) {
    return await chatsApiInstance.get(`/${chatId}/users`, {})
  }

  async getChatNewMessages (chatId: number) {
    return await chatsApiInstance.get(`/new/${chatId}`, {})
  }

  async uploadChatAvatar (formData: FormData) {
    return await chatsApiInstance.put('/avatar', { data: formData })
  }

  async addChatUsers (chatId: number, users: number[]) {
    return await chatsApiInstance.put('/users', { data: { chatId, users } })
  }

  async deleteChatUsers (chatId: number, users: number[]) {
    return await chatsApiInstance.delete('/users', { data: { chatId, users } })
  }

  async getToken (chatId: number) {
    return await chatsApiInstance.delete(`/token/${chatId}`, {})
  }
}
