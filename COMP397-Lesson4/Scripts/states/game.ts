// MENU STATE
module states {
    //MENU CLASS
    export class Game extends objects.Scene { //Menu class to extend to Scene class
        //PRIVATE INSTANCE VARIABLES
        _levelLabel: objects.Label;  // calling helloLabel variable of class label within menu class
        _backButton: objects.Button;
        _nextButton: objects.Button;
        constructor() {
            super();
        }

        public start(): void { //to override the scene with menu state objects and code
            scene = new createjs.Container(); // instantiate the variable of type createJS Container

            // hello label
            this._levelLabel = new objects.Label("Game Play", "60px Consolas", "#000000", 320, 240);
            stage.addChild(this._levelLabel); // add label to the stage
            // start button
            this._nextButton = new objects.Button("nextButton", 220, 340); //looking for image-url (path to image) to hold in this variable
            this._backButton = new objects.Button("backButton", 420, 340); //looking for image-url (path to image) to hold in this variable
            this._backButton.on("click", this._ClickBackButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called
            this._nextButton.on("click", this._ClickNextButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called

            stage.addChild(this._nextButton)
            stage.addChild(this._backButton)

            stage.addChild(scene); // this container will contain all our objects, and then implemented into the scene (stage) - preparation for the State Machine -- Only need one stage.addChild for the every object to go to the state
        }
        public update(): void { //update new additive objects if any come to being - such as calling a private method
            
        }
        //PRIVATE CALLBACK FUNCTIONS FOR THE BUTTONS
        private _ClickBackButton(event: createjs.MouseEvent): void { // event of type (mouse-event) - clicking - the start button
            changeState(config.MENU_STATE);
        }
        private _ClickNextButton(event: createjs.MouseEvent): void { // event of type (mouse-event) - clicking - the start button
            changeState(config.OVER_STATE);
        }
    }

} 