module objects {
    //DECLARES SCENE CLASS
    export class Scene extends createjs.Container { //scene class to extend to the createjs.Container (var scene) to pass in any objects from the states (better coding by using a class to add/remove(child) the states in the scene)
        constructor() {
            super(); //need to call super class whenever you call constructor
        }

        //PUBLIC METHODS
        public start(): void {

        }
        public update(): void{

        }

        /*public add(): void { //function to add to the scene via the scene class method - can't be made, tries to access createjs from the this class, can't you just import it?

        }*/
    }
} 