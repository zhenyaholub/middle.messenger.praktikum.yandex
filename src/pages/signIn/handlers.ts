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
