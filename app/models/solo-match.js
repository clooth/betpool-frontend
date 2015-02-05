import DS from 'ember-data';

export default DS.Model.extend({
  series: DS.attr('string'),
  seriesShort: DS.attr('string'),
  dateStarted: DS.attr('date'),
  dateFinished: DS.attr('date'),
  displayName: DS.attr('string'),
  player1: DS.belongsTo('player'),
  player2: DS.belongsTo('player'),
  player1RoleThisMatch: DS.attr('string'),
  player2RoleThisMatch: DS.attr('string'),
  player1Score: DS.attr('number'),
  player2Score: DS.attr('number')
});