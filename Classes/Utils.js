const DBTools = require("./DMF_DBTools");
const GenericObject = require("../Model/GenericObject");
//**An utility class for the DBTools class  */
class Utils extends DBTools {
  //**Executes the SQl query and returns the results */
  RetrieveObjectMySql = async (query) => {
    var genericObjects = new Array();
    var results = await this.executeSqlQuery(query);
    if (results[0] !== -1) {
      for (var cont = 0; cont < 1; cont++) {
        var genericObject = new GenericObject();
        genericObject.columns = [];
        genericObject.types = [];
        genericObject.values =
          genericObject.values.length === 0 ? results[0] : genericObject.values;
        results[1].forEach((column) => {
          genericObject.columns.push(column.name);
          genericObject.types.push(column.encoding);
        });
        genericObjects.push(genericObject);
      }
      return genericObjects;
    } else {
      return results;
    }
  };
}

module.exports = Utils;
