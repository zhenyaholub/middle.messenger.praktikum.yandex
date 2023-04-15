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
  NEW_PASSWORD_LABEL,
  NEW_PASSWORD_LABEL_AGAIN,
  OLD_PASSWORD_LABEL,
} from "../../utils/fieldLabels";
import {
  NEW_PASSWORD,
  NEW_PASSWORD_AGAIN,
  OLD_PASSWORD,
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

const oldPasswordInput = new EditFormInput({
  name: OLD_PASSWORD,
  id: OLD_PASSWORD,
  type: "password",
  value: "............",
});
const oldPassword = new EditFormItem({
  key: OLD_PASSWORD_LABEL,
  input: oldPasswordInput,
});
const newPasswordInput = new EditFormInput({
  name: NEW_PASSWORD,
  id: NEW_PASSWORD,
  type: "password",
  value: "............",
});
const newPassword = new EditFormItem({
  key: NEW_PASSWORD_LABEL,
  input: newPasswordInput,
});
const newPasswordAgainInput = new EditFormInput({
  name: NEW_PASSWORD_AGAIN,
  id: NEW_PASSWORD_AGAIN,
  type: "password",
  value: "............",
});
const newPasswordAgain = new EditFormItem({
  key: NEW_PASSWORD_LABEL_AGAIN,
  input: newPasswordAgainInput,
});

const items = [oldPassword, newPassword, newPasswordAgain];

const saveButton = new Button({
  type: "submit",
  text: "Сохранить",
  style: "max-width:280px",
});

const form = new EditForm({ items, button: saveButton });

export const editPassword = new Edit({ back, avatar, form });
