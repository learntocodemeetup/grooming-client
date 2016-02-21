import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    pressRelease() {
      this.send('showModalDialog', 'Very hat. Much disrupt. From hats route');
    },
    putOnItem(color) {
      this.send('showModalDialog', 'Another action for putting on a hat. From hats route. It shouldn\'t get run. The hat color is: ' + color);
    },
    takeOffItem() {
      this.send('showModalDialog', 'We (and your head) are so sorry this has happened. From hats route');
    }
  }
});
