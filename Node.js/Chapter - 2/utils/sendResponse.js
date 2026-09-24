/*
Challenge 2:

- Create and export a function called sendResponse().  
  What 4 things should this function take in as parameters?
*/

/* 
import fs from "node:fs/promises"
export async function sendResponse(res, statusCode, contentType, payLoad){
  res.statusCode = statusCode
  res.setHeader("Content-Type", contentType)
  res.end(payLoad)
}
*/

export async function sendResponse(res, statusCode, contentType, payload) {
  res.statusCode = statusCode
  res.setHeader("Content-Type", contentType)
  res.end(payload)
}
