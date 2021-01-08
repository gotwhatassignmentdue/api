const express = require("express");
const app = express();
const { authUser } = require('./verifyToken');
const port = 3000

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
      req, res => router.get("link/new/:fakeUserID1");

      // need to change to telebot APIs response
      res.json({
        userID : "testID",
        link : "testLink"
      })
    } catch (err) {
      console.log(err.message)
    }
  }
)
