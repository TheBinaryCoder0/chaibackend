require('dotenv').config()
const express = require('express')
// import express from "express"  => YEH BHI UPAR WALE LINE KI HI TARAH KAAM KARTA HAI (THEY BOTH ARE JUST DIFFERENT STYLES i.e., COMMON JS and MODULE JS)
const app = express()
const port = process.env.PORT || 5000; // YOU CAN CHANGE THIS AS PER YOUR NEED 

app.get('/', (req, res) => {
  res.send('Hello Aman!')
})

app.get('/twitter', (req, res) => {
    res.send('Twitter Response')
} )

app.get('/login', (req, res) => {
    res.send('<h1>Please Login at the Page<h1/>')
} )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
