import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | table-view', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:table-view');
    assert.ok(controller);
  });
});
