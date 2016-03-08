import { test } from 'qunit';
import moduleForAcceptance from 'meetup/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');

    assert.equal(this.$('.lat').text().trim(), '');
    assert.equal(this.$('.lng').text().trim(), '');
  });

  selectPlace({ lat: 123, lng: 456});
  andThen(function () {
    assert.equal(this.$('.lat').text().trim(), '123');
    assert.equal(this.$('.lng').text().trim(), '456');
  });
});
