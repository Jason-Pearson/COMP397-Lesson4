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
/// <reference path="../states/over.ts" />
/// <reference path="../states/menu.ts" />
/// <reference path="../states/game.ts" />



// GLOBAL GAME FRAMEWORK VARIABLES
var assets: createjs.LoadQueue; //have it be global variable - this is where your createJS assets will be held
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats; //make a function to set up game stats - via this variable that is of class Stats (imported from Stats.d.js in Scripts/typings folder) 
var state: number;
var scene: createjs.Container; // a box that other objects can be added to and used via addChild and similar functions - like Stage
var currentState: objects.Scene; // variable holding the scene class from objects module
//GAME OBJECTS
var menu: states.Menu; //variabe of type menu class in menu script from states module
var game: states.Game;
var over: states.Over;

var manifest = [{ id: "BackButton", src: "Assets/images/State_Machine_Buttons/backButton.png" }, //holds the images/assets in an array of assets/data
    { id: "NextButton", src: "Assets/images/State_Machine_Buttons/nextButton.png" },
    { id: "StartButton", src: "Assets/images/State_Machine_Buttons/startButton.png" }];
//deleted global variables to be instantiated by the menu class into the scene class to be shown on the canvas

//to preloading objects/assets on createJS (images for buttons, scene (via Container of type creatJS), etc)
function preload() {//code framework from the preloadJS API for preloading
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this); //on(complete) event listener - call init when everything is loaded - need a function to send the result for the event listener
    assets.loadManifest(manifest);
}
//Our void Start () method per se - upon intial frame, execute code
function init():void {
    canvas = document.getElementById("canvas"); // reference to canvas element
    stage = new createjs.Stage(canvas); // passing canvas to stage
    stage.enableMouseOver(20); // listening every 20fps for any mouse over events to enable them in the Stage (our main canvas - our scene per se)
    createjs.Ticker.setFPS(60); // set frame rate to 60 fps
    createjs.Ticker.on("tick", gameLoop); // update gameLoop every frame
    setupStats();//sets up our stat counting before calling Main function - to start counting in Main function
    
    state = config.MENU_STATE; // on first frame - we have the state number equal to the menu state first - 
    changeState(state); // - which calls this function on first frame to have menu state show up first - //now has state (number) parameter in order to ask for the state number via state the classes to pass into the function and change the state
}

// Main Game Loop - Our void Update() per se - checks and executes code every frame/per frame
function gameLoop(event: createjs.Event): void {
    stats.begin(); //start counting per frame -
    currentState.update();//calls the current state's update method
    stage.update(); // redraw/refresh stage every frame
    stats.end(); // - stop counting per frame
}
//Setup Game Stats - FramesPerSecond, MilliSeconds Response Time in Latency, etc.
function setupStats():void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";//from the screen's exact position (absolute) -
    stats.domElement.style.right = "0px";// - go 0px from the very right of the screen
    stats.domElement.style.top = "0px";// - go 0px from very top of the screen- domElement translates to DivElement in JS
    document.body.appendChild(stats.domElement); // translates to adding Stats to index.html in JS
}

//(1) without main function needed - need to show the current state function is the main function for the stage -
//State Machine
function changeState(state): void {
    //Launch various scenes
    switch (state) { // for example, based on (assignemnt 1) choices leading you to a state number and changing the state (screen) to progress
        case config.MENU_STATE:
            //if state number = 0, show menu scene
            stage.removeAllChildren();
            menu = new states.Menu(); //intsantiate menu object of type menu class
            currentState = menu; //stateFunction calls start method from menu object - which is a reference to the menu class that calls Start method
            break;
        case config.PLAY_STATE:
            //if state number = 1, show play scene
            stage.removeAllChildren();
            game = new states.Game(); //intsantiate menu object of type menu class
            currentState = game; //stateFunction calls start method from menu object - which is a reference to the menu class that calls Start method
            break;
        case config.OVER_STATE:
            //if state number = 2, shot game over;
            stage.removeAllChildren();
            over = new states.Over(); //intsantiate menu object of type menu class
            currentState = over; //stateFunction calls start method from menu object - which is a reference to the menu class that calls Start method
            break;
    }
    currentState.start(); //call the start method of the current state that is of class (scene)
    console.log(currentState.numChildren);//asking for the index of the num of children in the scene - if there is more than 1 you are screwed...meaning: keeps packing objects into the scene from previous states until memory expands more and crashes - check console in inspect element in Chrome
}