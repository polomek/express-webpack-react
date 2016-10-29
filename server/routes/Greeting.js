const {greeting} = require('../services/Greeting');

module.exports = (req, res) => {
  res.send(greeting());
}
