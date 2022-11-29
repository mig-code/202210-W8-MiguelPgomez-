export abstract class Component {
    protected template!: string;
    protected element!: Element;

   protected render(selector: string) {
        const e = document.querySelector(selector);
        if (e === null) {
            return;
        }
        this.element = e;
        this.element.innerHTML = this.template;
    }

    protected addRender(selector: string) {
        const e = document.querySelector(selector);
        if (e === null) {
            return;
        }
        this.element = e;
        this.element.innerHTML += this.template;
    }
   protected outRender(selector: string) {
        const e = document.querySelector(selector);
        if (e === null) {
            return;
        }
        this.element = e;
        this.element.outerHTML = this.template;
    }
}
