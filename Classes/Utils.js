const DBTools = require("./DMF_DBTools");
const GenericObject = require("../Model/GenericObject");
class Utils extends DBTools {
  RetrieveObjectMySql = async (query) => {
    var genericObjects = new Array();
    var results = await this.executeSqlQuery(query);

    for (var cont = 0; cont < results.length; cont++) {
      var genericObject = new GenericObject();
      genericObject.columns = [];
      genericObject.types = [];
      results[0].forEach((row) => {
        genericObject.values = row;
      });

      results[1].forEach((column) => {
        genericObject.columns.push(column.name);
        genericObject.types.push(column.encoding);
      });
      genericObjects.push(genericObject);
    }
    return genericObjects;
  };
}

module.exports = Utils;
