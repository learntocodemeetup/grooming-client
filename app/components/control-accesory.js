import Ember from 'ember';

export default Ember.Component.extend({
  
  hasItem: false,
  itemColor: 'pink',
  
  actions: {
    putOnItem: function(color) {
      this.set('itemColor', color);
      this.set('hasItem', true);
      this.sendAction('pressRelease');
    },
    takeOffItem: function() {
      this.set('hasItem', false);
      this.sendAction('takeOffItem');
    },
    howToRemoveItem: function() {
      this.sendAction('showModalDialog', 'We realize it is difficult to remove our proprietary vicelok hats');
    }
    
  }
});
