// test/store/actions.spec.js

import actions from '../../src/store/actions';
import { types } from '../../src/store/mutations';

describe('EveryNote root actions', () => {
  it('should have addNote action', () => {
    const { addNote } = actions;
    const mockContext = {
      commit: jasmine.createSpy('commit'),
    };
    const aNote = {};

    addNote(mockContext, aNote);

    expect(mockContext.commit)
      .toHaveBeenCalledWith(types.ADD_NOTE, aNote);
  });
});