const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const listOfData = [];

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);
app.use(express.json());

app.post("/create", (req, res) => {
  const data = req.body;
  if (!data || !data.id) {
    console.log(data);
    return res.status(400).json({ error: "ID is required in request body" });
  }
  listOfData.push(data);
  res.status(201).json({ message: "Data created successfully", data });
});

app.get("/list", (req, res) => {
  res.status(200).json({ data: listOfData });
});

app.patch("/edit", (req, res) => {
  const { id, ...updatedData } = req.body;
  if (!id) {
    return res.status(400).json({ error: "ID is required in request body" });
  }

  const itemIndex = listOfData.findIndex((item) => item.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  listOfData[itemIndex] = { ...listOfData[itemIndex], ...updatedData };
  res.status(200).json({
    message: "Data updated successfully",
    data: listOfData[itemIndex],
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
