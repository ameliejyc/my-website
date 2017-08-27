const dbConnection = require('../database/db_connection');

const getRecipe = (cb) => {
  const getRecipeQuery = `SELECT * FROM blog ORDER BY id DESC;`;
  dbConnection.query(getRecipeQuery, (err, res) => {
    if (err) return cb(err);
    else {
      // console.log('this is the response', res.rows);
      cb(null, res.rows);
    }
  });
};

module.exports = getRecipe;
