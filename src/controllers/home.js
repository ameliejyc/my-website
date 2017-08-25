const home = (req, res) => {
  res.render('home', { message: 'hello' });
}

module.exports = home;
