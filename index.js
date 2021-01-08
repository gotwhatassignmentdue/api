const express = require("express");
const app = express();
const { authUser } = require('./verifyToken');
const port = 3001
const axios = require('axios').default;
const userID = "123";

// get list of tasks
app.get("/", authUser, async (req, res) => {
  try {
    console.log(req.userData.tasks);
    res.status(200).json(req.userData.tasks);
  } catch (err) {
    console.log(err.message);
  }
})

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})

// API TO GET USER INFO

// need router for telebot

app.get("/initiateTelebot/", (req, res) => {
    try {
      axios
      .post(`http://localhost:3000/link/new/:${userID}`)
      .then((response) => res.status(200).json(response.data))

      // need to change to telebot APIs response
    } catch (err) {
      console.log(err.message)
    }
  }
)
