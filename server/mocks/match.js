module.exports = function(app) {
  var express = require('express');
  var matchRouter = express.Router();

  matchRouter.get('/', function(req, res) {
    res.send({
      'match': [{
  "display_name": "Best of 3 between Niina \"Soyhi\" Kahela and EZ \"Easy Computer\" CPU (In 4 weeks)",
  "date_finished": null,
  "series": "Best of 3",
  "series_short": "BO3",

  "player2": {
    "first_name": "EZ",
    "last_name": "CPU",
    "display_name": "EZ \"Easy Computer\" CPU",
    "score": 0,
    "role": "Protoss",
    "nickname": "Easy Computer",
    "role_this_match": "Protoss"
  },

  "player1": {
    "first_name": "Niina",
    "last_name": "Kahela",
    "display_name": "Niina \"Soyhi\" Kahela",
    "score": 0,
    "role": "Zerg",
    "nickname": "Soyhi",
    "role_this_match": "Zerg"
  },

  "date_started": "2015-03-05T17:55:37Z"
}]
    });
  });

  matchRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  matchRouter.get('/:id', function(req, res) {
    res.send({
      'match': {
        id: req.params.id
      }
    });
  });

  matchRouter.put('/:id', function(req, res) {
    res.send({
      'match': {
        id: req.params.id
      }
    });
  });

  matchRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/match', matchRouter);
};
