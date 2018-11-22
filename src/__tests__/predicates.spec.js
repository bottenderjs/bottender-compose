const { isTextMatch, isPayloadMatch, hasStateEqual } = require('../predicates');

describe('#isTextMatch', () => {
  it('should work with RegExp', () => {
    const predicate = isTextMatch(/yes/);

    const predicateResultYes = predicate({
      event: {
        isText: true,
        text: 'yes',
      },
    });

    expect(predicateResultYes[0]).toBe('yes');
    expect(predicateResultYes.length).toBe(1);

    expect(
      predicate({
        event: {
          isText: true,
          text: 'no',
        },
      })
    ).toBeNull();
  });

  it('should work with RegExp with extraction', () => {
    const predicate = isTextMatch(/yes, (sir)/);

    const predicateResultYes = predicate({
      event: {
        isText: true,
        text: 'yes, sir',
      },
    });

    expect(predicateResultYes[0]).toBe('yes, sir');
    expect(predicateResultYes[1]).toBe('sir');
    expect(predicateResultYes.length).toBe(2);

    expect(
      predicate({
        event: {
          isText: true,
          text: 'no',
        },
      })
    ).toBeNull();
  });

  it('should work with string', () => {
    const predicate = isTextMatch('yes');

    const predicateResultYes = predicate({
      event: {
        isText: true,
        text: 'yes',
      },
    });

    expect(predicateResultYes[0]).toBe('yes');
    expect(predicateResultYes.length).toBe(1);

    expect(
      predicate({
        event: {
          isText: true,
          text: 'no',
        },
      })
    ).toBeNull();
  });
});

describe('#isPayloadMatch', () => {
  it('should work with RegExp', () => {
    const predicate = isPayloadMatch(/yes/);

    const predicateResultYes = predicate({
      event: {
        isPayload: true,
        payload: 'yes',
      },
    });

    expect(predicateResultYes[0]).toBe('yes');
    expect(predicateResultYes.length).toBe(1);

    expect(
      predicate({
        event: {
          isPayload: true,
          payload: 'no',
        },
      })
    ).toBeNull();
  });

  it('should work with RegExp with extraction', () => {
    const predicate = isPayloadMatch(/yes, (sir)/);

    const predicateResultYes = predicate({
      event: {
        isPayload: true,
        payload: 'yes, sir',
      },
    });

    expect(predicateResultYes[0]).toBe('yes, sir');
    expect(predicateResultYes[1]).toBe('sir');
    expect(predicateResultYes.length).toBe(2);

    expect(
      predicate({
        event: {
          isPayload: true,
          payload: 'no',
        },
      })
    ).toBeNull();
  });

  it('should work with string', () => {
    const predicate = isPayloadMatch('yes');

    const predicateResultYes = predicate({
      event: {
        isPayload: true,
        payload: 'yes',
      },
    });

    expect(predicateResultYes[0]).toBe('yes');
    expect(predicateResultYes.length).toBe(1);

    expect(
      predicate({
        event: {
          isPayload: true,
          payload: 'no',
        },
      })
    ).toBeNull();
  });
});

describe('#hasStateEqual', () => {
  it('should work', () => {
    const predicate = hasStateEqual('x', 1);

    expect(
      predicate({
        state: {
          x: 1,
        },
      })
    ).toBe(true);

    expect(
      predicate({
        state: {
          x: 2,
        },
      })
    ).toBe(false);
  });

  it('should work with deep path', () => {
    const predicate = hasStateEqual('x.y.z', 1);

    expect(
      predicate({
        state: {
          x: {
            y: {
              z: 1,
            },
          },
        },
      })
    ).toBe(true);

    expect(
      predicate({
        state: {
          x: {
            y: {
              z: 2,
            },
          },
        },
      })
    ).toBe(false);
  });

  it('should work with object equal', () => {
    const predicate = hasStateEqual('x', { y: { z: 1 } });

    expect(
      predicate({
        state: {
          x: {
            y: {
              z: 1,
            },
          },
        },
      })
    ).toBe(true);

    expect(
      predicate({
        state: {
          x: {
            y: {
              z: 2,
            },
          },
        },
      })
    ).toBe(false);
  });
});
