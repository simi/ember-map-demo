import Ember from 'ember';
import CategoriesListRouteMixin from 'letnar-frontend/mixins/categories-list-route';

export default Ember.Route.extend(CategoriesListRouteMixin, {
  setupController: function(controller) {
    var model = this.controllerFor('categories').get('model');
    var relations = model.get('@each.contacts').getEach('content');

    // flatten
    var contacts = relations.reduce(function(a,b){return a.concat(b);});

    controller.set('model', contacts);
    controller.set('category', {name: 'Vše'});
    this.controllerFor('categories').set('contacts', contacts);
  }
});
