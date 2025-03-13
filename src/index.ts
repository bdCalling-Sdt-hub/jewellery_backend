import { config } from "dotenv";
import express, { Response } from "express";
import http from "http";
import { registerAdminRoutes, registerUserRoutes } from "./routes";
import startDB from "./db";
import logger from "@utils/logger";

config();
startDB();

const app = express();

app.use(express.json());
app.use(logger);
registerUserRoutes(app);
registerAdminRoutes(app);

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/", (_, res: Response) => {
  res.json({
    message: "Hello, this is the root route for Cathys Jewellery Shop Backend 🙌"
  })
});
