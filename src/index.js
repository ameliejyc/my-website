const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('The future is port', app.get('port'));
});
