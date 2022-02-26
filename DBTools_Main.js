const DBTools = require("./Classes/DMF_DBTools");
const Utils = require("./Classes/Utils");

//var results = dbTools.executeSqlQuery("SELECT * FROM morador");
let utils = new Utils(
  "localhost",
  "root",
  "",
  "database",
  "SELECT * FROM table",
  "morador",
  3306
);
var results = utils.RetrieveObjectMySql("SELECT * FROM table").then((value) => {
  console.log(value);
});
