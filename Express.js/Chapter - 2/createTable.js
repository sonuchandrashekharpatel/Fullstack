/* Lesson 6: Setting up the Database */

import sqlite3 from "sqlite3"
import { open } from 'sqlite'
import path from "node:path"

async function createTable() {
    const db = await open({
        filename: path.join("database.db"),
        driver: sqlite3.Database
    })

    await db.exec(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            artist TEXT NOT NULL,
            price REAL NOT NULL,
            image TEXT NOT NULL,
            year INTEGER,
            genre TEXT,
            stock INTEGER
        )    
    `)

    await db.close()

    console.log('Table created successfully...')
}

createTable()

/* Lesson 5: Aside: Creating a DB Table */
/* 
import sqlite3 from "sqlite3"
import { open } from "sqlite"
import path from "node:path"

export async function createTable() {

    const db = await open({
        filename: path.join("database.db"),
        driver: sqlite3.Database
    })

    await db.exec(`
    
        CREATE TABLE IF NOT EXISTS abductions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            location TEXT NOT NULL,
            details TEXT NOT NULL
        )
    `)

    await db.close()

    console.log("Table Created Successfully...")
}

createTable() */