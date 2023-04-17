import { mediator } from "../../mediator/mediator";
import { REGULAR_EXPRESSIONS } from "../../utils/regularExpressions";

export const handleSubmit = (e: Event) => {
  e.preventDefault();

  let data: Record<string, FormDataEntryValue> = {};

  const formDataEntries = new FormData(e.target as HTMLFormElement).entries();

  for (let entry of formDataEntries) {
    const [key, value] = entry;

    data[key] = value;
  }

  console.log(data);
};

export const validate = ({ target }: Event) => {
  const { name, value } = target as HTMLInputElement;
  mediator.emit("error");
  return REGULAR_EXPRESSIONS[name as keyof typeof REGULAR_EXPRESSIONS].test(
    value
  );
};
