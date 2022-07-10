const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/mern-dq", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch(console.error);

const Quest = require("./models/Quest");

app.get("/quests", async (req, res) => {
  const quests = await Quest.find();

  res.json(quests);
});

app.post("/quests/new", (req, res) => {
  const quest = new Quest({
    text: req.body.text,
  });

  quest.save();

  res.json(quest);
});

app.delete("/quests/delete/:id", async (req, res) => {
  const result = await Quest.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.put("/quests/complete/:id", async (req, res) => {
  const quest = await Quest.findById(req.params.id);

  quest.complete = !quest.complete;

  quest.save();

  res.json(quest);
});

const PORT = 3001;
app.listen(PORT, () => console.log("Server started on port " + PORT));
