/* Lesson 20: Add an Event Emitter */
import { EventEmitter } from "node:events"
import { createAlert } from "../utils/createAlert.js"

// create event emitter
export const sightingEvents = new EventEmitter()

// Regiter the listener function 
try {
    sightingEvents.on('sighting-added', createAlert)
    
} catch(err) {
    console.error("Sighting Events Error: ", err)
}

/* 
import { EventEmitter } from "node:events"
import { createAlert } from "../utils/createAlert.js"

export const sightingEvents = new EventEmitter()

try {
    sightingEvents.on("sighting-added", createAlert)
} catch (err) {
    console.log(err)
} */