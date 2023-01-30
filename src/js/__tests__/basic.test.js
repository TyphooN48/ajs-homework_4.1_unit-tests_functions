import healthIndicator from '../basic';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 40 }, 'wounder'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])(
  ('should show health string'),
  (input, expected) => {
    const result = healthIndicator(input);
    expect(result).toBe(expected);
  },
);
