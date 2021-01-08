const express = require("express");
const app = express();
const { authUser } = require('./verifyToken');
const port = 3001
const axios = require('axios').default;
const userID = "123";

// get list of tasks
app.get("/task", authUser, async (req, res) => {
  try {
    data = req.userData.tasks;

    data.sort(function(a,b){
      return new Date(b.endDate) - new Date(a.endDate);
    });

    res.status(200).json(data.filter(task => task.completed === true));
  } catch (err) {
    console.log(err.message);
  }
})

// get list of tasks by module code
app.get("/task/:module", authUser, async (req, res) => {
  const { module } = req.params;
  try {
    const data = req.userData.tasks;
    res.status(200).json(data.filter(task => task.module === module));
  } catch (err) {
    console.log(err.message);
  }
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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})