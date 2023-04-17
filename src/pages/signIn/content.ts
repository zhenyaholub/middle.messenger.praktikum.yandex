import { Button } from "../../components/button/button";
import { Field } from "../../components/field/field";
import { Form } from "../../components/form/form";
import { Icons8 } from "../../components/icons8/icons8";
import { Label } from "../../components/label/label";
import { Link } from "../../components/link/link";
import { Title } from "../../components/title/title";
import { SignIn } from "./signIn";
import { Input } from "../../components/input/input";

import { LOGIN, PASSWORD } from "../../utils/fieldNames";
import { push } from "../../utils/helpers";
import { SIGN_UP } from "../../utils/urls";
import { handleSubmit, validate } from "./handlers";

const title = new Title({ text: "Вход" });

const loginLabel = new Label({ for: LOGIN, text: "Логин" });
const loginInput = new Input({
  name: LOGIN,
  id: LOGIN,
  type: "text",
  placeholder: "Vitalik",
  value: "",
  class: "input",
  events: { blur: validate, focus: validate },
});

const login = new Field({ label: loginLabel, input: loginInput });

const passwordLabel = new Label({ for: PASSWORD, text: "Пароль" });
const passwordInput = new Input({
  name: PASSWORD,
  id: PASSWORD,
  type: "password",
  placeholder: "...........",
  class: "input",
  events: { blur: validate, focus: validate },
});
const password = new Field({
  label: passwordLabel,
  input: passwordInput,
  style: "margin:0 0 159px 0",
});

const fields = [login, password];
const topButton = new Button({ type: "submit", text: "Авторизоваться" });
const bottomButton = new Link({
  text: "Нет аккаунта?",
  events: { click: push.bind(this, SIGN_UP) },
});

const form = new Form({
  title,
  fields,
  topButton,
  bottomButton,
  events: { submit: handleSubmit },
});

const icons8 = new Icons8({});

export const signIn = new SignIn({ form, icons8 });
