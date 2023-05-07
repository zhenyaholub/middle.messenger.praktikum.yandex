import { SignIn } from "./pages/signIn/signIn";
import { SignUp } from "./pages/signUp/signUp";
import { signInProps } from "./pages/signIn/content";
import { signUpProps } from "./pages/signUp/content";
import { Profile } from "./pages/profile/profile";
import { profileProps } from "./pages/profile/content";
import { Chats } from "./pages/chats/chats";
import { chatsProps } from "./pages/chats/content";
import { Edit } from "./components/edit/edit";
import { editPasswordProps } from "./pages/editPassword/content";
import { editProps } from "./pages/edit/content";

import { setBodyStyles } from "./utils/helpers";
import { router } from "./utils/router";
import {
  EDIT_PASSWORD,
  EDIT_PROFILE,
  MESSENGER,
  SETTINGS,
  SIGN_IN,
  SIGN_UP,
} from "./utils/urls";

window.addEventListener("load", setBodyStyles);
window.addEventListener("pathnamechanged", setBodyStyles);

router.use(SIGN_IN, SignIn, signInProps).start();
router.use(SIGN_UP, SignUp, signUpProps).start();
router.use(SETTINGS, Profile, profileProps).start();
router.use(EDIT_PASSWORD, Edit, editPasswordProps).start();
router.use(EDIT_PROFILE, Edit, editProps).start();
router.use(MESSENGER, Chats, chatsProps).start();
