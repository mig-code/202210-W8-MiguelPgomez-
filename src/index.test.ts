import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { App } from './components/app/app.js';
describe('Given "Home" component', () => {
    document.body.innerHTML = ` <div class="root"></div>
        `;
    describe('When Dom is loaded', () => {
        const ContentLoad = new App();

        const elements = [screen.getByRole('heading', { name: 'My Series' })];
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
