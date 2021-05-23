var fsm =require("landMaker");
cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {

    },

    buttonClicked(){
        fsm.restart();
    },
    gameStart(){
        cc.director.loadScene("MainGameScene");
    }
});
