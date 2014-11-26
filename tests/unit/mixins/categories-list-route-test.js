import Ember from 'ember';
import CategoriesListRouteMixin from 'letnar-frontend/mixins/categories-list-route';

module('CategoriesListRouteMixin');

// Replace this with your real tests.
test('it works', function() {
  var CategoriesListRouteObject = Ember.Object.extend(CategoriesListRouteMixin);
  var subject = CategoriesListRouteObject.create();
  ok(subject);
});
