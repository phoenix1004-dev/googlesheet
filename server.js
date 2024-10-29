const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/get-sheets-data", async (req, res) => {
  const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR8JZGmlifkp2x8nYEw7jM6CvgIAatdVmO7KxahuvQPfC5QrOvg55FoiNc1jv0IHz8T-EKXLwOimfjW/pubhtml";

  try {
    const response = await axios.get(sheetURL);
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
