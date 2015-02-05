import Ember from 'ember';
import DS from 'ember-data';

var ApplicationAdapter = DS.RESTAdapter.extend({
    namespace: 'api/v1',
    
    pathForType: function(type) {
      var underscored = Ember.String.underscore(type);
      return Ember.String.pluralize(underscored);
    }
});

export default ApplicationAdapter;