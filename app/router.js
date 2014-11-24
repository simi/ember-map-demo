import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('categories', { path: '/' }, function() {
    this.route('show', { path: '/category/:category_id' });
  });
});

export default Router;
