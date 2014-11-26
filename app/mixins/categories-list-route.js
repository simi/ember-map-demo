import Ember from 'ember';

export default Ember.Mixin.create({
  renderTemplate: function(controller, model) {
    this.render('categories.list', {
      controller: controller
    });
  }
});
