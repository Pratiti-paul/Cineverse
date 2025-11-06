import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes


app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("CineVerse API is running...");
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
