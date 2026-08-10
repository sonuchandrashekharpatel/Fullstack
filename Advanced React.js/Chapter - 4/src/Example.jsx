export default function App() {
	const [name, setName] = useState("")
	
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	  
	async function formAction(formData) {
	  setLoading(true)
	  setError(null)
	  try {
	    const newName = await updateNameInDB(formData.get("name"))
	    setName(newName)
	  } catch (error) {
	    console.error(error.message)
	    setError(error)
	  } finally {
	    setLoading(false)
	  }
	}
	 return (
    <>
      <form action={formAction}>
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