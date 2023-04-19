import { REGULAR_EXPRESSIONS } from '../../utils/regularExpressions'

export const handleSubmit = (e: Event) => {
  e.preventDefault()

  const data: Record<string, FormDataEntryValue> = {}

  const formDataEntries = new FormData(e.target as HTMLFormElement).entries()

  for (const entry of formDataEntries) {
    const [key, value] = entry

    data[key] = value
  }

  console.log(data)
}

export const validate = (event: Event) => {
  if (event) {
    const { target } = event

    const { name, value } = target as HTMLInputElement

    return !REGULAR_EXPRESSIONS[name as keyof typeof REGULAR_EXPRESSIONS].test(
      value
    )
  }
}
