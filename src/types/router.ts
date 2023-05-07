import { type Edit } from '../components/edit/edit'
import { type Chats } from '../pages/chats/chats'
import { type Profile } from '../pages/profile/profile'
import { type SignIn } from '../pages/signIn/signIn'
import { type SignUp } from '../pages/signUp/signUp'

export type RoutesType = '/' | '/sign-up' | '/messenger' | '/settings'
export type BlockClassType =
  | typeof SignIn
  | typeof SignUp
  | typeof Chats
  | typeof Edit
  | typeof Profile