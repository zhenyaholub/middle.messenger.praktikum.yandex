import { Field } from "./components/field/field";
import { Form } from "./components/form/form";
import { Icons8 } from "./components/icons8/icons8";
import { Input } from "./components/input/input";
import { Label } from "./components/label/label";
import { Title } from "./components/title/title";

import { SignIn } from "./pages/signIn/signIn";

import { render } from "./utils/helpers";

const icons8 = new Icons8({});
const title = new Title({ text: "Вход" });
const signInForm = new Form({
  title,
  fields: [
    new Field({
      label: new Label({ for: "login", text: "Логин" }),
      input: new Input({}),
    }),
  ],
});

const signIn = new SignIn({ icons8, form: signInForm });

render("#app", signIn);
