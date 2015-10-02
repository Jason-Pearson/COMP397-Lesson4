/// <reference path="../config/config.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/stats/stats.d.ts" />
/// <reference path="../typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="../typings/easeljs/easeljs.d.ts" />
/// <reference path="../typings/tweenjs/tweenjs.d.ts" />
/// <reference path="../typings/soundjs/soundjs.d.ts" />
/// <reference path="../typings/preloadjs/preloadjs.d.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../states/menu.ts" />
// GLOBAL GAME FRAMEWORK VARIABLES
var canvas;
var stage;
var stats; //make a function to set up game stats - via this variable that is of class Stats (imported from Stats.d.js in Scripts/typings folder) 
var state;
var scene; // a box that other objects can be added to and used via addChild and similar functions - like Stage
var currentState; // variable holding the scene class from objects module
//GAME OBJECTS
var menu; //variabe of type menu class in menu script from states module
//deleted global variables to be instantiated by the menu class into the scene class to be shown on the canvas
//Our void Start () method per se - upon intial frame, execute code
function init() {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // listening every 20fps for any mouse over events to enable them in the Stage (our main canvas - our scene per se)
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats(); //sets up our stat counting before calling Main function - to start counting in Main function
    state = config.MENU_STATE; // on first frame - we have the state number equal to the menu state first - 
    changeState(); // - which calls this function on first frame to have menu state show up first
}
// Main Game Loop - Our void Update() per se - checks and executes code every frame/per frame
function gameLoop(event) {
    stats.begin(); //start counting per frame -
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // - stop counting per frame
}
//Setup Game Stats - FramesPerSecond, MilliSeconds Response Time in Latency, etc.
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute"; //from the screen's exact position (absolute) -
    stats.domElement.style.right = "0px"; // - go 0px from the very right of the screen
    stats.domElement.style.top = "0px"; // - go 0px from very top of the screen- domElement translates to DivElement in JS
    document.body.appendChild(stats.domElement); // translates to adding Stats to index.html in JS
}
//(1) without main function needed - need to show the current state function is the main function for the stage -
//State Machine
function changeState() {
    //Launch various scenes
    switch (state) {
        case config.MENU_STATE:
            //if state number = 0, show menu scene
            menu = new states.Menu(); //intsantiate menu object of type menu class
            currentState = menu; //stateFunction calls start method from menu object - which is a reference to the menu class that calls Start method
            break;
        case config.PLAY_STATE:
            //if state number = 1, show play scne
            break;
        case config.OVER_STATE:
            //if state number = 2, shot game over;
            break;
    }
    currentState.start(); //call the start method of the current state that is of class (scene)
}
//# sourceMappingURL=game.js.map