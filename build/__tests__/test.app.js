import { describe, expect, test } from '@jest/globals';
import { hello, turnGreen } from '../app';
describe('sum module', function () {
    test('returns the string hello', function () {
        expect(hello()).toBe('Hello World');
    });
    test('should be green', function () {
        expect(turnGreen()).toBe('null');
    });
});
//# sourceMappingURL=test.app.js.map