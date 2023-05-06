const express = require("express");
const cors=require("cors")
const app = express();
const recipiesRoute=require("./routes/recipiesRoute")
const PORT = 4000;

app.use(express.json())
app.use(cors())

app.use("/", recipiesRoute)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
