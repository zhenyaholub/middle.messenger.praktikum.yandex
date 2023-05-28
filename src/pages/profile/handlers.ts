import { store } from '../../store/store'
import { logout } from '../../store/user/actionCreators'

export const handleLogout = () => { store.dispatch(logout()) }
