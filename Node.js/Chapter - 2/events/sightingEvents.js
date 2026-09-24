import { EventEmitter } from "node:events"
import { createAlert } from "../utils/createAlert.js"

export const sightingEvents = new EventEmitter()

try {
    sightingEvents.on("sighting-added", createAlert)
} catch (err) {
    console.log(err)
}