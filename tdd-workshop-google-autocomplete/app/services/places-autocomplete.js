import Ember from 'ember';
// https://github.com/EmberSherpa/ember-places-autocomplete
export default Ember.Service.extend(Ember.Evented, {
  setup(input) {

  },
  notify(data) {
    this.trigger('selected', data);
  }
});
