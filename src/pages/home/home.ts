import { Component } from '../../components/component/component.js';

export class Home extends Component {
    constructor(selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
    }

    createTemplate() {
        return `
        <div class="container">
            <header class="main-header">
                <h1 class="main-title">My Series</h1>
            </header>
        </div> 
        `;
    }
}
