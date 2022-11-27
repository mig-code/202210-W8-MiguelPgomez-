export const foo = 'foo';
(() => {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('LOAD DOM');
    });
})();
