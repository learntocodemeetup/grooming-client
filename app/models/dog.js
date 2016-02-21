import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  breed: DS.attr('string'),
  age: DS.attr('number'),
  groomDate: DS.attr('date'),
  groomTotal: DS.attr('number'),
  ownerName:  DS.attr('string'),
  ownerMood: DS.attr('string'),
  onTime: DS.attr('boolean')

});