Fire.Class({
    extends: Fire.Behavior,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this.stateData.setMixByName('running', 'jump', 0.2);
        this.stateData.setMixByName('jump', 'running', 0.4);

        var stage = Fire.engine.getCurrentSceneN();
        stage.interactive = true;
        stage.on('mousedown',  this.onTouchStart.bind(this));
        stage.on('touchstart', this.onTouchStart.bind(this));
    },

    onTouchStart: function () {
        this.state.setAnimationByName(0, 'jump', false);
        this.state.addAnimationByName(0, 'running', true, 0);
    },

    // called every frame
    tick: function (dt) {

    },
});
