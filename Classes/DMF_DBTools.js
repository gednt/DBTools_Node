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

  connection = async () => {
    var db = require("mysql2/promise");
    var connect = await db.createConnection({
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
    try {
      var conn = await this.connection();
      const [rows, fields] = await conn.execute(query);
      conn.end();
      return [fields, rows];
    } catch (error) {
      return [-1, error];
    }
  }
};
