const fs = require('fs');

// let dbConnection = undefined;
// if (process.env.NODE_ENV === 'test') {
//   dbConnection = require('../../../tests/test_database/db_connection_test.js');
// } else {
//   dbConnection = require('../database/db_connection.js');
// }

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

const runDbBuild = dbConnection.query(sql, (err, res) => {
  if(err) throw err;
  console.log("Database created with the result: ", res);
});

module.export = runDbBuild;
