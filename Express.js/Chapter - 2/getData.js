/* Lesson 10: Aside: Getting our Data */

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import path from 'node:path'

async function getData() {

    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
    })

    try {
        const query = `SELECT * FROM abductions WHERE location = ?`
        const params = ['Roswell']

        const abduction = await db.all(query, params)

        console.log(abduction)
    } catch (err) {
        console.error(err)
    }
}

getData()

