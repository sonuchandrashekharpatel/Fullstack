// Lesson 21 Aside: Server-side-Events
const eventSource = new EventSource("/temp/live") // An EventSource is an interface that is used push notification from a server via server sent events so it allows a persitance one connection whether server can update

const tempDisplay = document.getElementById("temp-display")

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data)
  const temp = data.temp

  tempDisplay.textContent = temp
}

eventSource.onerror = () => {
  console.log("Connection failed...")
}

// END

// const inputField = document.getElementById('email-input')

// document.getElementById('sub-btn').addEventListener('click', async (e) => {
//   e.preventDefault()

//   try {
//     const response = await fetch("./sub", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json" 
//       },
//       body: JSON.stringify({email: inputField.value}),
//     })
//     const data = await response.json()
//   console.log(data)

//   } catch (error) {
//     formMessageText.textContent = `Serious ghouls! Please try again.`
//     console.error("Error:", error) 
//   } 
// })