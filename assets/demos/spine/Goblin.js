Fire.Class({
    extends: Fire.Behavior,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        var stage = Fire.engine.getCurrentSceneN();
        stage.interactive = true;
        stage.on('click', this.onClick.bind(this));
    },

    onClick: function () {
        var currentSkinName = this.skeleton.skin.name;
        var newSkinName = (currentSkinName === 'goblin' ? 'goblingirl' : 'goblin');
        this.skeleton.setSkinByName(newSkinName);
        this.skeleton.setSlotsToSetupPose();
    },

    // called every frame
    tick: function (dt) {

    },
});
