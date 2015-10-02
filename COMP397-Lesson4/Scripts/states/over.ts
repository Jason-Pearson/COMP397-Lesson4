// MENU STATE
module states {
    //MENU CLASS
    export class Over extends objects.Scene { //Menu class to extend to Scene class
        //PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;  // calling helloLabel variable of class label within menu class
        _backButton: objects.Button;
        constructor() {
            super();
        }

        public start(): void { //to override the scene with menu state objects and code
            scene = new createjs.Container(); // instantiate the variable of type createJS Container

            // hello label
            this._levelLabel = new objects.Label("Game Over", "60px Consolas", "#000000", 320, 240);
            stage.addChild(this._levelLabel); // add label to the stage
            // start button
            this._backButton = new objects.Button("backButton", 320, 340); //looking for image-url (path to image) to hold in this variable
            this._backButton.on("click", this._ClickBackButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called

            stage.addChild(this._backButton)
            stage.addChild(scene); // this container will contain all our objects, and then implemented into the scene (stage) - preparation for the State Machine
        }
        public update(): void { //update new additive objects if any come to being - such as calling a private method
            this._levelLabel.rotation += 5;            
        }
        //PRIVATE CALLBACK FUNCTIONS FOR THE BUTTONS
        private _ClickBackButton(event: createjs.MouseEvent): void { // event of type (mouse-event) - clicking - the start button
            changeState(config.PLAY_STATE);
        }
        
    }

} 