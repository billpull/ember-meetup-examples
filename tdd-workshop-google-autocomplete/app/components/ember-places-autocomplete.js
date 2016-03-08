import Ember from 'ember';
import layout from '../templates/components/ember-places-autocomplete';

export default Ember.Component.extend({
  layout,
  placesAutocomplete: Ember.inject.service(),
  init() {
    this._super(...arguments);
    this.get('placesAutocomplete').on('selected', this, this.notifyContext);
  },
  didInsertElement() {
    let input = this.$('input');
    this.get('placesAutocomplete').setup(input);
  },
  willDestroy() {
    this._super(...arguments);
    this.get('placesAutocomplete').off('selected', this);
  },
  notifyContext(data) {
    this.sendAction('on-select', data);
  }
});
