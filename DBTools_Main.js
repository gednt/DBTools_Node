const DBTools = require("./Classes/DMF_DBTools");
const Utils = require("./Classes/Utils");
const GenericObject = require("./Model/GenericObject");

//var results = dbTools.executeSqlQuery("SELECT * FROM morador");
let utils = new Utils(
  "localhost",
  "root",
  "",
  "dbteste",
  "SELECT * FROM table_teste",
  "table_teste",
  3306
);

/*async function RetrieveObjectMySql() {
  var results = await utils.RetrieveObjectMySql("SELECT * FROM table_teste");
  showResults(results);
}
RetrieveObjectMySql();*/

let genericObject = new GenericObject();
genericObject.columns = ["id", "value"];
genericObject.values = ["23", "testeUpdate232"];
/*
async function insert() {
  var results = await utils.Insert(
    genericObject.columns,
    "table_teste",
    genericObject.values
  );
  showResults(results);
}
insert();*/

/*async function update() {
  var results = await utils.Update(
    genericObject.columns,
    "table_teste",
    genericObject.values,
    "id=23"
  );
  showResults(results);
}
update();*/
/*
async function Delete() {
  var results = await utils.Delete("table_teste", "id=23");
  showResults(results);
}

Delete();
*/
/*async function executeSqlQuery() {
  var results = await utils.executeSqlQuery("SELECT * FROM table_teste");

  showResults(results);
}
executeSqlQuery();*/

function showResults(results) {
  console.log(results);
  console.log(
    "last line, breakpoint here to see the results of the above line."
  );
}
