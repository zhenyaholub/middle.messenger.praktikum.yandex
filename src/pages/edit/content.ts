import { Back } from "../../components/back/back";
import { RoundedButton } from "../../components/roundedButton/roundedButton";
import { Edit } from "../../components/edit/edit";
import { Avatar } from "../../components/avatar/avatar";
import { EditForm } from "../../components/editForm/editForm";
import { Button } from "../../components/button/button";
import { EditFormInput } from "../../components/editFormInput/editFormInput";
import { EditFormItem } from "../../components/editFormItem/editFormItem";

import arrow from "../../../static/icons/arrow.svg";
import avatarIcon from "../../../static/icons/avatar.svg";

import {
  DISPLAY_NAME_LABEL,
  EMAIL_LABEL,
  FIRST_NAME_LABEL,
  LOGIN_LABEL,
  PHONE_LABEL,
  SECOND_NAME_LABEL,
} from "../../utils/fieldLabels";
import {
  DISPLAY_NAME,
  EMAIL,
  FIRST_NAME,
  LOGIN,
  PHONE,
  SECOND_NAME,
} from "../../utils/fieldNames";
import { push } from "../../utils/helpers";
import { CHATS } from "../../utils/urls";

const button = new RoundedButton({
  type: "submit",
  arrowClasses: "",
  image: arrow,
});
const back = new Back({ button, events: { click: push.bind(this, CHATS) } });
const avatar = new Avatar({
  image: avatarIcon,
  edit: true,
  style: "margin:0 0 97px 0;",
});

const emailInput = new EditFormInput({
  name: EMAIL,
  id: EMAIL,
  type: "email",
  value: "pochta@yandex.ru",
});
const email = new EditFormItem({ key: EMAIL_LABEL, input: emailInput });
const loginInput = new EditFormInput({
  name: LOGIN,
  id: LOGIN,
  type: "text",
  value: "ivanivanov",
});
const login = new EditFormItem({ key: LOGIN_LABEL, input: loginInput });
const firstNameInput = new EditFormInput({
  name: FIRST_NAME,
  id: FIRST_NAME,
  type: "text",
  value: "Иван",
});
const firstName = new EditFormItem({
  key: FIRST_NAME_LABEL,
  input: firstNameInput,
});
const secondNameInput = new EditFormInput({
  name: SECOND_NAME,
  id: SECOND_NAME,
  type: "text",
  value: "Иванов",
});
const secondName = new EditFormItem({
  key: SECOND_NAME_LABEL,
  input: secondNameInput,
});
const displayNameInput = new EditFormInput({
  name: DISPLAY_NAME,
  id: DISPLAY_NAME,
  type: "text",
  value: "Иван",
});
const displayName = new EditFormItem({
  key: DISPLAY_NAME_LABEL,
  input: displayNameInput,
});
const phoneInput = new EditFormInput({
  name: PHONE,
  id: PHONE,
  type: "text",
  value: "+7 (909) 967 30 30",
});
const phone = new EditFormItem({
  key: PHONE_LABEL,
  input: phoneInput,
});

const items = [email, login, firstName, secondName, displayName, phone];

const saveButton = new Button({
  type: "submit",
  text: "Сохранить",
  style: "max-width:280px",
});

const form = new EditForm({ items, button: saveButton });

export const edit = new Edit({ back, avatar, form });
