import { app } from "./app.js";
import { config } from "./config/config.js";
import { ConnectDB } from "./config/DB.js";
import dotenv from "dotenv";

const { NODE_ENV, PORT } = config;
// const PORT = 5000;
ConnectDB();

app.listen(PORT, () => {
  console.log(
    `${new Date()} Server is running in port ${PORT} in ${NODE_ENV} development`
  );
});
