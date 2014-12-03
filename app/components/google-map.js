/*global google */
import Ember from 'ember';

export default Ember.Component.extend({
  map: null,
  markers: [],

  showMap: function() {
    var container = this.$('.map-canvas');
    var options = {
      center: new google.maps.LatLng(this.get("latitude"), this.get("longitude")),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.set('map', new google.maps.Map(container[0], options));

    this.showMarkers();
  }.on('didInsertElement'),

  showMarkers: function() {
    this.get('markers').forEach(function(marker) {
      marker.setMap(null);
    });
    this.get('markers').clear();

    var coordinates = null;
    var marker = null;
    var self = this;
    this.get('contacts').forEach(function(contact) {
      coordinates = new google.maps.LatLng(contact.get('latitude'), contact.get('longitude'));
      marker = new google.maps.Marker({
        position: coordinates,
        map: self.get('map'),
        title: contact.get('name')
      });

      self.get('markers').pushObject(marker);
    });

  }.observes('contacts.@each')
});
