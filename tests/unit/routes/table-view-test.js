import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | table-view', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:table-view');
    assert.ok(route);
  });
});
