import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import achievementsRoutes from "./src/app/api/achievements/route";

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI: string = process.env.MONGO_URI || ""; // Ensure MONGO_URI is defined in .env
if (!mongoURI) {
  throw new Error("MongoDB connection string is missing in .env");
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/achievements", achievementsRoutes);

// Server
const PORT: number = parseInt(process.env.PORT || "5000", 10);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
