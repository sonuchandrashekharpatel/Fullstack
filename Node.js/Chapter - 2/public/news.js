const eventSource = new EventSource("/api/news")
const liveContainer = document.getElementById("live-container")

// Hnandle the live updates
eventSource.onmessage = (event) => {
  
  const data = JSON.parse(event.data)
  const story = data.story
  liveContainer.textContent = story

}

// Handle the connection lost
eventSource.onerror = () => {
  console.error("Connection Failed...")
}
