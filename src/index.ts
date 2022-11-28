import { App } from './components/app/app.js';

export const foo = 'foo';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            new App();
        } catch (error) {
            console.log('Error: ', error);
        }
    });
})();
