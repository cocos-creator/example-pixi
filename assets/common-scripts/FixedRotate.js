Fire.Class({
    extends: Fire.Behavior,

    properties: {
        speed: {
            default: Math.PI
        }
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame
    tick: function (dt) {
        this.rotation += dt * this.speed;
    },
});
