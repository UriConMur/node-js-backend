jest.mock('config', () => ({
  get: () => 'production',
}));
const logger = require('../logger');

describe('logger production', () => {
  test('expect logger to take production branch', () => {
    expect(logger.environment).toBe('production');
  });
});
