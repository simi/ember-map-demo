import Ember from 'ember';

export default Ember.Mixin.create({
  renderTemplate: function(controller) {
    this.render('categories.list', {
      controller: controller
    });
  }
});
