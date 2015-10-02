// MENU STATE
module states {
    //MENU CLASS
    export class Menu extends objects.Scene { //Menu class to extend to Scene class
        //PRIVATE INSTANCE VARIABLES
        _helloLabel: objects.Label;  // calling helloLabel variable of class label within menu class
        _startButton: objects.Button;
        constructor()
        {
            super();
        }

        public start(): void { //to override the scene with menu state objects and code
            scene = new createjs.Container(); // instantiate the variable of type createJS Container

            // hello label
            this._helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
            stage.addChild(this._helloLabel); // add label to the stage
            // start button
            this._startButton = new objects.Button("startButton", 320, 340); //looking for image-url (path to image) to hold in this variable
            this._startButton.on("click", this._ClickStartButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called

            stage.addChild(this._startButton); // add Start Button (of type Button) to the Stage (a variable of type createJS (class) which holds the Canvas as a reference)
            stage.addChild(scene); // this container will contain all our objects, and then implemented into the scene (stage) - preparation for the State Machine
        }
        public update(): void { //update new additive objects if any come to being - such as calling a private method
            //PRIVATE METHODS
            
        }
        private _ClickStartButton(event: createjs.MouseEvent): void { // event of type (mouse-event) - clicking - the start button
            this._helloLabel.text = "Clicked"; // change text for helloLabel - won't be the same position in the canvas as before in Main function - "Game Start"
        }
    }
 
}