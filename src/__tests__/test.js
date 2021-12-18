import levelHealth from '../app';

test.each([
  ['маг', 90, 'healthy'],
  ['лучник', 30, 'wounded'],
  ['лучник', 11, 'critical'],
])(
  ('should return level health'),
  (name, health, expected) => {
    const result = levelHealth(name, health);

    expect(result).toBe(expected);
  },
);
