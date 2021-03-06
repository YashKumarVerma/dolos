const mysql = require("mysql");
require("dotenv").config();

const config =
  process.env.NODE_ENV === "docker"
    ? {
        database: process.env.DOCKER_DB_DATABASE,
        port: process.env.DOCKER_DB_PORT,
        host: process.env.DOCKER_DB_HOST,
        user: process.env.DOCKER_DB_USER,
        password: process.env.DOCKER_DB_PASSWORD,
      }
    : {
        database: process.env.DB_DATABASE || "db",
        port: process.env.DB_PORT || "3306",
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "user",
        password: process.env.DB_PASSWORD || "pass",
      };

// eslint-disable-next-line new-cap
const connection = new mysql.createConnection(config);

connection.connect((err) => {
  if (err)
    console.log(
      `Database not connected! :  + ${JSON.stringify(err, undefined, 2)}`
    );
  else console.log("Database is connected!");
});

module.exports = connection;
