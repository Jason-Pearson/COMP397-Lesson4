var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU STATE
var states;
(function (states) {
    //MENU CLASS
    var Over = (function (_super) {
        __extends(Over, _super);
        function Over() {
            _super.call(this);
        }
        Over.prototype.start = function () {
            scene = new createjs.Container(); // instantiate the variable of type createJS Container
            // hello label
            this._levelLabel = new objects.Label("Game Over", "60px Consolas", "#000000", 320, 240);
            stage.addChild(this._levelLabel); // add label to the stage
            // start button
            this._backButton = new objects.Button("backButton", 320, 340); //looking for image-url (path to image) to hold in this variable
            this._backButton.on("click", this._ClickBackButton, this); // to make image interactive - have startbutton variable listen to an event handler (on - "click") - and have event handler reference our function (clickStartButton) to be called
            stage.addChild(this._backButton);
            stage.addChild(scene); // this container will contain all our objects, and then implemented into the scene (stage) - preparation for the State Machine
        };
        Over.prototype.update = function () {
            this._levelLabel.rotation += 5;
        };
        //PRIVATE CALLBACK FUNCTIONS FOR THE BUTTONS
        Over.prototype._ClickBackButton = function (event) {
            changeState(config.PLAY_STATE);
        };
        return Over;
    })(objects.Scene);
    states.Over = Over;
})(states || (states = {}));
//# sourceMappingURL=over.js.map