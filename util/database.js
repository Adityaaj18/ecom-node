const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "4a410asd", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize