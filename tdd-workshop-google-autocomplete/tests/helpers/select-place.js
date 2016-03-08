import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('selectPlace', function(app, data) {
  Ember.run(function () {
    let service = app.__container__.lookup('service:places-autocomplete');
    service.notify(data);
  });
});
