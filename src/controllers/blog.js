const getRecipe = require('../model/queries/getrecipe');

const blog = (req, res) => {
  getRecipe((err, recipes) => {
    if (err) {console.log('ERROR: ', err)}
    else {
      res.render('blog', {recipes});
    };
  });
};

module.exports = blog;
