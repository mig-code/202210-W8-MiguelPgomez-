import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { App } from './components/app/app.js';
describe('Given "Home" component', () => {
    document.body.innerHTML = ` <div class="root"></div>
        `;
    describe('When Dom is loaded', () => {
        const ContentLoad = new App();

        const elements = [
            screen.getByRole('heading', { name: 'My Series' }),
            screen.getByRole('heading', { name: 'Pending Series' }),
            screen.getByText('You have 2 series pending to watch'),
            screen.getByText('You have watched 3 series'),
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
            expect(ContentLoad).toBeInstanceOf(App);
        });
    });
});
