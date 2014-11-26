import DS from 'ember-data';
import ENV from 'letnar-frontend/config/environment';

export default DS.RESTAdapter.extend({
  namespace: ENV.adapterNamespace
});
