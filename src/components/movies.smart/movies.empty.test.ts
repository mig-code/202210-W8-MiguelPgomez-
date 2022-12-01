import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { tvShowsMockEmpty } from '../../mocks/tvShowsMocks.js';

import { Movies } from './movies.js';

describe('Given "Movies" component', () => {
    describe('When it is instantiated with a valid selector .main and all series watched', () => {
        document.body.innerHTML = `
        <section class="series">
            <h2 class="section-title">Series list</h2>
            <section class="series-pending"></section>
            <section class="series-watched"></section>
        </section>
         
        `;
        const MoviesComponent = new Movies('.main');
        MoviesComponent.movies = tvShowsMockEmpty;
        MoviesComponent.manageComponent('.main');

        const elements = [
            screen.getByText(`Congrats! You've watched all your series`),
            screen.getByText('You already have not watched any serie'),
        ];
        describe.each(elements)(
            'When it is call with a DOM implementation',
            (element: HTMLElement) => {
                test(`Then ${element.tagName} should be render`, () => {
                    expect(element).toBeInstanceOf(HTMLElement);
                    expect(element).toBeInTheDocument();
                });
            }
        );

        test('Then we should to be able to instantiate it', () => {
            expect(MoviesComponent).toBeInstanceOf(Movies);
        });
    });
});
