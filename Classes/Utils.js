const DBTools = require("./DMF_DBTools");
const GenericObject = require("../Model/GenericObject");
const mysql = require("mysql2");
//**An utility class for the DBTools class  */
class Utils extends DBTools {
  /**Executes the SQL query and returns the results */
  RetrieveObjectMySql = async (query) => {
    var results = await this.executeSqlQuery(query);

    return results;
  };
  /**
   * Inserts the data into the database
   * @param {*} _fields
   * @param {*} _table
   * @param {*} _values
   * @returns
   */
  Insert = async (_fields, _table, _values) => {
    //Monta os campos
    var query = "INSERT INTO " + _table + "(";
    var fields = "",
      values = "";
    for (var cont = 0; cont < _fields.length; cont++) {
      fields += _fields[cont] + ",";
    }
    fields = fields.substring(0, fields.length - 1);
    fields += ") VALUES(";
    //Valores
    for (var cont = 0; cont < _fields.length; cont++) {
      var out = parseInt(_values[cont]);
      if (isNaN(out) === true) {
        values += "" + mysql.escape(_values[cont]) + ",";
      } else {
        values += "" + mysql.escape(out) + ",";
      }
    }
    values = values.substring(0, values.length - 1);
    //Finaliza a query
    query += fields;
    query += values + ")";
    //Executa a query
    var results = await this.RetrieveObjectMySql(query);
    return await results;
  };
  /**
   * Updates the data from the database, based on the passed conditions.
   * @param {*} _fields
   * @param {*} _table
   * @param {*} _values
   * @param {*} _condition
   * @returns
   */
  Update = async (_fields, _table, _values, _condition) => {
    var query = "",
      fields = "",
      values = "";
    //Monta os campos
    query = "UPDATE " + _table + " SET ";
    //VALORES
    for (var cont = 0; cont < _fields.length; cont++) {
      var out = isNaN(_values[cont]);
      if (out === true) {
        _values[cont] = mysql.escape(_values[cont]);
      } else {
        _values[cont] = _values[cont];
      }

      if (_values[cont] === undefined) {
        _values[cont] = "null";
      }
    }
    //Campos e valores
    for (var cont = 0; cont < _fields.length; cont++) {
      fields += _fields[cont] + "=" + _values[cont] + ",";
    }
    fields = fields.substring(0, fields.length - 1);
    fields += " WHERE " + _condition;
    query += fields;
    //Executa a query
    var results = await this.RetrieveObjectMySql(query);
    return await results;
  };
  /**Deletes the specified rows, a condition is mandatory*/
  Delete = async (table, condition) => {
    if (condition === undefined) {
      condition = "column='alt'";
    } else {
      condition = condition;
    }
    var query = "DELETE FROM " + table + " WHERE " + condition;
    var results = await this.RetrieveObjectMySql(query);
    return results;
  };
}

module.exports = Utils;
