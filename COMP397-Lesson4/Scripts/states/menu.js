var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU STATE
var states;
(function (states) {
    //MENU CLASS
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.start = function () {
            scene = new createjs.Container(); // instantiate the variable of type createJS Container
            // hello label
            this._helloLabel = new objects.Label("Game Start", "60px Consolas", "#000000", 320, 240);
            stage.addChild(this._helloLabel); // add label to the stage
            // start button
            this._startButton = new objects.Button("startButton", 320, 340); //looking for image-url (path to image) to hold in this variable
            this._startButton.on("click", this._ClickStartButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called
            stage.addChild(this._startButton); // add Start Button (of type Button) to the Stage (a variable of type createJS (class) which holds the Canvas as a reference)
            stage.addChild(scene); // this container will contain all our objects, and then implemented into the scene (stage) - preparation for the State Machine
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype._ClickStartButton = function (event) {
            changeState(config.PLAY_STATE); //calles the change state upon clicking the button - to change value of in the changestate parameter to the game state constant
        };
        return Menu;
    })(objects.Scene);
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map