var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU STATE
var states;
(function (states) {
    //MENU CLASS
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this);
        }
        Game.prototype.start = function () {
            scene = new createjs.Container(); // instantiate the variable of type createJS Container
            // hello label
            this._levelLabel = new objects.Label("Game Play", "60px Consolas", "#000000", 320, 240);
            stage.addChild(this._levelLabel); // add label to the stage
            // start button
            this._nextButton = new objects.Button("nextButton", 220, 340); //looking for image-url (path to image) to hold in this variable
            this._backButton = new objects.Button("backButton", 420, 340); //looking for image-url (path to image) to hold in this variable
            this._backButton.on("click", this._ClickBackButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called
            this._nextButton.on("click", this._ClickNextButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called
            stage.addChild(this._nextButton);
            stage.addChild(this._backButton);
            stage.addChild(scene); // this container will contain all our objects, and then implemented into the scene (stage) - preparation for the State Machine -- Only need one stage.addChild for the every object to go to the state
        };
        Game.prototype.update = function () {
        };
        //PRIVATE CALLBACK FUNCTIONS FOR THE BUTTONS
        Game.prototype._ClickBackButton = function (event) {
            changeState(config.MENU_STATE);
        };
        Game.prototype._ClickNextButton = function (event) {
            changeState(config.OVER_STATE);
        };
        return Game;
    })(objects.Scene);
    states.Game = Game;
})(states || (states = {}));
//# sourceMappingURL=game.js.map