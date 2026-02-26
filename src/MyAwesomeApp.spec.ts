import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
	test('should render firstname and lastname', () => {
		const { container } = render(React.createElement(MyAwesomeApp));

		const name = container.querySelector('h1');
		const lastname = container.querySelector('h3');

		expect(name?.innerHTML).contain('Jefferson');
		expect(lastname?.innerHTML).contain('Chileno');
	});

	test('should render firstname and lastname - Screen', () => {
		render(React.createElement(MyAwesomeApp));

		// const h1 = screen.getByRole('heading', {
		// 	level: 1,
		// });
		const h3 = screen.getByTestId('lastname-subtitle');

		// expect(h1.innerHTML).toContain('Jefferson');
		expect(h3.innerHTML).toContain('Chileno');
	});

	test('should render firstname and lastname - Snapshot', () => {
		const { container } = render(React.createElement(MyAwesomeApp));

		expect(container).toMatchSnapshot();
	});
});
