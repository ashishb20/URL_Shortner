import cors from 'cors';
import dotenv from "dotenv";
import connectDB from './config/db.js';
import app from './app.js';

dotenv.config();
connectDB();

//  for deployment
const path = require("path");

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});