import DS from 'ember-data';

export default DS.Model.extend({
  nickname: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  displayName: DS.attr('string'),
  role: DS.attr('string')
});
