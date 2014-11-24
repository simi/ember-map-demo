import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var model = this.controllerFor('categories').get('model');
    var relations = model.get('@each.contacts').map(function(data) {
      return data.content;
    });

    var contacts = []

    contacts = contacts.concat.apply(contacts, relations);
    controller.set('model', contacts);
    this.controllerFor('categories').set('contacts', contacts);
  }
});
