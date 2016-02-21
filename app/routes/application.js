import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    showModalDialog: function(message) {
      this.controllerFor('application').set('modalMessage', message);
      this.controllerFor('application').set('isShowingModal', true);
    },
    closeModalDialog: function() {
      this.controllerFor('application').set('isShowingModal', false);
    },
    receiveAdvice() {
      alert("Butt fuck!");
    }
  }

});