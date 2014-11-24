import Ember from 'ember';

export default Ember.Component.extend({
  showMap: function() {
    this.set('markers', []);
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
    var contacts = this.get('contacts');
    var map = this.get('map');
    var markers = this.get('markers');

    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    var coordinates = null;
    var marker = null;
    var infoWindow = null;

    contacts.forEach(function(contact) {
      coordinates = new google.maps.LatLng(contact.get('latitude'), contact.get('longitude'));
      marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: contact.get('name')
      });

      contact.marker = marker;
      markers.pushObject(marker);
    });

    this.set('markers', markers);
  }.observes('contacts.@each')
});
