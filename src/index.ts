import { SignIn } from './pages/signIn/signIn'
import { SignUp } from './pages/signUp/signUp'
import { signInProps } from './pages/signIn/content'
import { signUpProps } from './pages/signUp/content'
import { Profile } from './pages/profile/profile'
import { profileProps } from './pages/profile/content'
import { Chats } from './pages/chats/chats'
import { chatsProps } from './pages/chats/content'

import { setBodyStyles } from './utils/helpers'
import { router } from './utils/router'
import { MESSENGER, PROFILE, SIGN_IN, SIGN_UP } from './utils/urls'

window.addEventListener('load', setBodyStyles)
window.addEventListener('popstate', setBodyStyles)

router.use(SIGN_IN, SignIn, signInProps).start()
router.use(SIGN_UP, SignUp, signUpProps).start()
router.use(PROFILE, Profile, profileProps).start()
router.use(MESSENGER, Chats, chatsProps).start()
