import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Home } from './home.js';

describe('Given "Home" component', () => {
    document.body.innerHTML = ` <div class="container">
            <header class="main-header">
                <h1 class="main-title">My Series</h1>
            </header>
            <main class="main">
            </main>
        </div> 
        `;
    describe('When it is instantiated with a valid selector', () => {
        const HomePage = new Home('.main');

        const elements = [
            screen.getByRole('heading', { name: 'Series list' }),
            screen.getByRole('heading', { name: 'Pending Series' }),
            screen.getByRole('heading', {
                name: 'Watched Series',
            }),
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
            expect(HomePage).toBeInstanceOf(Home);
        });
    });
});
