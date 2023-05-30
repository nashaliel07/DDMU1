require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");
const articlesRoutes = require("./routes/articles");

//set port
const port = process.env.PORT || 8080;
//get db file
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db.json");
const db = low(adapter);

// Agregado para verificar la instancia

db.defaults({ articles: [] }).write();

const app = express();

app.db = db;

const options = {
  openapi: "3.0.0",
  info: {
    title: "Article Api - CERTUS",
    version: "0.0.1",
    description: "Demo Api for sales",
  },
  servers: [
    {
      url: "http://localhost:" + port,
    },
  ],
  apis: ["./routes/*.js"],
};

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/articles", articlesRoutes);

app.listen(port, () => console.log("NCD: listening on port " + port));
