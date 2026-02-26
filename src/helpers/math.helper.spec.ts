import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('Add ', () => {
	test('two positives numbers', () => {
		// 1. Arrange
		const a = 1;
		const b = 2;

		// 2. Act
		const result = add(a, b);

		// 3. Assert
		expect(result).toBe(3);
	});
});

describe('sustract', () => {
	test('should two positive numbers', () => {
		const a = 3;
		const b = 5;

		const result = subtract(a, b);

		expect(result).toBe(a - b);
	});

	test('first negative second positive', () => {
		const a = -1;
		const b = 4;

		const result = subtract(a, b);

		expect(result).toBe(a - b);
	});
});

describe('multiply', () => {
	test('should multiply by zero', () => {
		const a = 3;
		const b = 0;

		const result = multiply(a, b);

		expect(result).toBe(a * b);
	});

	test('first positive, second negative', () => {
		const a = 3;
		const b = -2;

		const result = multiply(a, b);

		expect(result).toBe(a * b);
	});
});
