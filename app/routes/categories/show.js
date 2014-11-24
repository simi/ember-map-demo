import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('category', params.category_id);
  },

  setupController: function(controller, model) {
    controller.set('category', model);
    controller.set('model', model.get('contacts'));
    this.controllerFor('categories').set('contacts', model.get('contacts'));
  }
});
