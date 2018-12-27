import { expect } from 'chai';

import * as atoms from './atoms';
import * as fx from './fx';
import * as molecules from './molecules';

describe('Components', () => {
  const components = { ...atoms, ...fx, ...molecules };
  Object.keys(components).map(key => it(
    `${key} should have proper display name`,
    () => expect(components[key].displayName).to.equal(key),
  ));
});
