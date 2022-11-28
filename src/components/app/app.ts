import { Home } from "../../pages/home/home.js";

export class App {
    constructor() {
        try {
            console.log('Loaded App');
            new Home('.root');
        } catch (error) {
            console.log(error);
        }
    }
}
