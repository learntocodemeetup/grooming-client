import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('dog');
  }
});

// GET / http://localhost:3000/api/dogs gets an array of dogs