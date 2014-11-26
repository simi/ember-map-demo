import Ember from 'ember';
import CategoriesListRouteMixin from 'letnar-frontend/mixins/categories-list-route';

export default Ember.Route.extend(CategoriesListRouteMixin, {
  model: function(params) {
    return this.store.find('category', params.category_id);
  },

  setupController: function(controller, model) {
    controller.set('category', model);
    controller.set('model', model.get('contacts'));
    this.controllerFor('categories').set('contacts', model.get('contacts'));
  }
});
