import { Error } from "../../components/error/error";
import { Link } from "../../components/link/link";

import { push } from "../../utils/helpers";
import { CHATS } from "../../utils/urls";

export const error404 = new Error({
  code: "404",
  message: "Не туда попали",
  link: new Link({
    text: "Назад к чатам",
    events: { click: push.bind(this, CHATS) },
  }),
});
