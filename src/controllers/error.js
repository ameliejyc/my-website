const client = (req, res) => {
  res.status(404).render('error', {
    layout: 'error',
    statusCode: 404,
    errorMessage: '404 client error',
  });
};

const server = (err, req, res, next) => {
  console.log('im internal server error ', err)
  res.status(500).render('error', {
    layout: 'error',
    statusCode: 500,
    errorMessage: '500 server error',
  });
};

module.exports = {
  client,
  server
}
