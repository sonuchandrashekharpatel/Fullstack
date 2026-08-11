import { useActionState, useState } from "react"
export default function App() {
	const [name, actionFunction, isPending] = useActionState(
		async (prevState, formData) => {
			try {
				const newName = await updateNameInDB(formData.get("name"))
				return newName
			} catch (error) {
				console.error(error.message)
			} 
		}
		, "")

	
	 return (
    <>
      <form action={actionFunction}>
        <input
          type="text"
          name="name"
          required
        />
        <button type="submit">Update</button>
      </form>
    </>
  )
}