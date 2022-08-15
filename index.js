const express = require('express')
// const redis = require('redis')
const axios = require('axios')
// const responseTime = require('response-time')

const app = express()

//MiddleWares

// app.use(responseTime())

app.get('/', async (req, res) => {
  try {
    console.log('API hitter')
    const fetchData = await axios.get('https://api.spacexdata.com/v3/rockets')
    return res.json({ data: fetchData.data })

    // res.send('Hello world')
  } catch (error) {
    return res.status(500).json({
      error: error.toString(),
    })
  }
})

app.listen(3000, () => {
  console.log('Server started at post 3000')
})
