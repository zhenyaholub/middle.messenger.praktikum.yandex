import { ProfileLink } from '../../components/profileLink/profileLink'
import { Search } from '../../components/search/search'
import { ChatItem } from '../../components/chatItem/chatItem'
import { SmallAvatar } from '../../components/smallAvatar/smallAvatar'
import { Dialog } from '../../components/dialog/dialog'
import { Companion } from '../../components/companion/companion'
import { MessageBlock } from '../../components/messageBlock/messageBlock'
import { ChatMessage } from '../../components/chatMessage/chatMessage'
import { MessageActionsArea } from '../../components/messageActionsArea/messageActionsArea'
import { RoundedButton } from '../../components/roundedButton/roundedButton'
import { Actions } from '../../components/actions/actions'

import { MESSAGE, SEARCH } from '../../utils/fieldNames'
import { SETTINGS } from '../../utils/urls'
import { router } from '../../utils/router'

import smallArrow from '../../../static/icons/small_arrow.svg'
import searchIcon from '../../../static/icons/search.svg'
import attach from '../../../static/icons/attach.svg'
import arrow from '../../../static/icons/arrow.svg'
import { MessageInput } from '../../components/messageInput/messageInput'
import { SearchInput } from '../../components/searchInput/searchInput'
import { SearchLabel } from '../../components/searchLabel/searchLabel'
import { connect } from '../../store/connect'
import { type Block } from '../../utils/block'
import { connectToUserData } from '../../utils/helpers'
import { Chats } from './messenger'

const profileLink = new ProfileLink({
  image: smallArrow,
  events: {
    click: () => {
      router.go(SETTINGS)
    }
  }
})
const input = new SearchInput({
  name: SEARCH,
  id: SEARCH,
  type: 'text',
  placeholder: 'Поиск',
  class: 'search__input'
})
const withIsSearchLabelVisible = connect((state) => ({
  isVisible: state.search.isLabelVisible
}))
const SearchLabelComponent = withIsSearchLabelVisible(
  SearchLabel as typeof Block
)

const searchLabel = new SearchLabelComponent({
  image: searchIcon
}) as SearchLabel

const search = new Search({
  image: searchIcon,
  input,
  searchLabel
})

const avatar = new SmallAvatar({})
const avatar2 = new SmallAvatar({})
const chatItem = new ChatItem({
  avatar,
  name: 'Андрей',
  lastMessage: 'Привет',
  lastMessageTime: '10:05',
  unreadMessagesCount: 1
})

const chatItem2 = new ChatItem({
  avatar: avatar2,
  name: 'Андрей',
  lastMessage: 'Привет',
  lastMessageTime: '10:05',
  unreadMessagesCount: 1
})

const chatsList = [chatItem, chatItem2]

const companionAvatar = new SmallAvatar({})
const dialogActions = new Actions({})
const companion = new Companion({
  avatar: companionAvatar,
  name: 'Андрей',
  actions: dialogActions
})

const message1 = new ChatMessage({ text: 'Привет', timeString: '12:00' })
const message2 = new ChatMessage({
  text: 'Дароу',
  timeString: '12:01',
  user: true
})
const messages = [message1, message2]

const messageBlock = new MessageBlock({
  items: messages,
  dateString: '19 июня'
})
const items = [messageBlock]

const messageInput = new MessageInput({
  name: MESSAGE,
  id: MESSAGE,
  type: 'text',
  placeholder: 'Сообщение',
  class: 'messageActionsArea__input'
})
const submit = new RoundedButton({
  type: 'submit',
  image: arrow,
  arrowClasses: 'rotate180Deg',
  disabled: '',
  isSubmit: true
})
const actions = new MessageActionsArea({
  image: attach,
  input: messageInput,
  submit
})
const dialog = new Dialog({ companion, items, actions })

export const chatsProps = {
  profileLink,
  search,
  chats: chatsList,
  right: dialog
}

export const MessengerComponent = connectToUserData(Chats as typeof Block)
