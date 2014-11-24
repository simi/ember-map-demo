import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  urls: DS.attr('string'),
  phones: DS.attr('string'),
  address: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  category: DS.belongsTo('category')
});
