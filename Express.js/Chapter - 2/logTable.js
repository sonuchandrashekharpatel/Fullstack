
/* Lesson 6: Setting up the Database */

import sqlite3 from "sqlite3"
import { open } from "sqlite"
import path from "node:path"

async function logTable(){

  const db = await open({
    filename: "database.db",
    driver: sqlite3.Database
  })

  try {
    const products = await db.all(`SELECT * FROM products`)

    console.table(products)
  } catch(err) {
    console.error("Error in fetching the products", err)
  } finally {
    await db.close()
  }
}

logTable()

/* Lesson 5: Aside: Creating a DB Table */
/* 
import sqlite3 from "sqlite3"
import { open } from "sqlite"
import path from "node:path"

async function logTable() {

  const db = await open({
    filename: path.join("database.db"),
    driver: sqlite3.Database
  })

  try {
    const abductionTable = await db.all(`SELECT * FROM abductions`)
    console.table(abductionTable)

  } catch(err) {
    console.error("Error in fetching the abductions..", err)
  } finally {
    await db.close()
  }
}

logTable() */
