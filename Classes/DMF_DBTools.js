module.exports = class DBTools {
  /**
   * Initiates an instance of the DBTools class
   * @param {*} host
   * @param {*} uid
   * @param {*} password
   * @param {*} database
   * @param {*} query
   * @param {*} table
   * @param {int} port
   */
  constructor(host, uid, password, database, query, table, port) {
    this.host = host;
    this.uid = uid;
    this.password = password;
    this.database = database;
    this.query = query;
    this.table = table;
    this.port = port;
    this.Results = [];
  }

  connection = () => {
    var db = require("mysql2");
    var connect = db.createPool({
      host: this.host,
      user: this.uid,
      password: this.password,
      port: this.port,
      database: this.database,
    });

    return connect;
  };
  //Executes the Query
  //
  async executeSqlQuery(query) {
    var conn = this.connection();
    var results = [];
    this.Results = results;
    try {
      // now get a Promise wrapped instance of that pool
      const promisePool = conn.promise();
      // query database using promises
      const [rows, fields] = await promisePool.query(query);
      //console.log("Internally" + rows);
      return [rows, fields];
    } catch (exception) {
      console.log(exception);
      return [-1, "Erro " + exception.message];
    }
  }
};
