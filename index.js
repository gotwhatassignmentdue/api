const express = require("express");
const app = express();
const port = 3000

// get list of tasks
app.get("/", async (req, res) => {
  req.token
  try {

    
    // const tasks = [
    //   {
    //     id: "string",
    //     targetID: "string",
    //     targetName: "string",
    //     taskType: 0,
    //     typeID: 0,
    //     createdDate: "string",
    //     startDate: "string",
    //     endDate: "string",
    //     completed: true,
    //   },
    // ];
  } catch (err) {
    console.log(err.message);
  }
})
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })