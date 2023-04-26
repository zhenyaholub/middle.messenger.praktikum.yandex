import { type ProfileGeneralPropsType } from '../../types/profile'

import { type Action } from '../../components/action/action'
import { type Avatar } from '../../components/avatar/avatar'
import { type ArrowButton } from '../../components/arrowButton/arrowButton'
import { type ProfileItem } from '../../components/profileItem/profileItem'

export type ProfilePropsType = {
  back: ArrowButton
  avatar: Avatar
  name: string
  items: ProfileItem[]
  actions: Action[]
} & ProfileGeneralPropsType
