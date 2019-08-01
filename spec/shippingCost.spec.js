const { shippingCost } = require('../lib/shippingCost');

describe(shippingCost, () => {
  const order = [
    {
      width: 8,
      height: 9,
      depth: 7,
    },
    {
      width: 18,
      height: 29,
      depth: 37,
    },
    {
      width: 81,
      height: 92,
      depth: 74,
    },
    {
      width: 104,
      height: 240,
      depth: 30,
    },
  ];

  it('takes an array of parcel objects', () => {
    expect(shippingCost(order)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          width: 8,
          height: 9,
          depth: 7,
        }),
      ]),
    );
  });
});
