import Ember from 'ember';

export default Ember.Component.extend({
  colors: ['red', 'blue', 'orange', 'pink', 'purple', 'none'],

  actions: {
    putOnItem: function(color) {
      this.sendAction('putOnItem', color);
    }
  }
});
