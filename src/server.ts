import dotenv from "dotenv";
import express from "express";

import { checkApiKey } from "./lib/check-api-key.js";
import mcpRoutes from "./routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/mcp", checkApiKey, mcpRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
