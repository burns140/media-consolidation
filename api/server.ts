import express from 'express';
const cors = require("cors");
const landingPage = require("./routes/landingPage.ts");
const getDiscogs = require('./routes/Vinyl/getDiscogs.ts');

const PORT = 8000;

const app = express();

app.get('/', (req, res) => res.send(`This server is running on port ${PORT}`));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use(cors());

app.use("/landingPage", landingPage);
app.use("/getDiscogs", getDiscogs);