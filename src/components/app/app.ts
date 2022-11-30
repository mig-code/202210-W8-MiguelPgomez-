import { Home } from "../../pages/home/home.js";

export class App {
    constructor() {
        try {
            new Home('.root');
        } catch (error) {
            console.log(error);
        }
    }
}
