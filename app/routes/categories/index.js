import Ember from 'ember';
import CategoriesListRouteMixin from 'letnar-frontend/mixins/categories-list-route';

export default Ember.Route.extend(CategoriesListRouteMixin, {
  model: function() {
    return this.store.all('contact');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('category', {name: 'Vše'});
    this.controllerFor('categories').set('contacts', model);
  }
});
