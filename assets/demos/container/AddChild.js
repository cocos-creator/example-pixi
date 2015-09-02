Fire.Class({
    extends: Fire.Behavior,

    properties: {
        object: {
            default: null,
            type: PIXI.DisplayObject
        }
    },

    // use this for initialization
    onLoad: function () {
        for (var j = 0; j < 5; j++) {
            for (var i = 0; i < 5; i++) {
                var bunny = Fire.instantiate(this.object);
                bunny.x = 40 * i;
                bunny.y = 40 * j;
                this.addChild(bunny);
            };
        };
    },

    // called every frame
    tick: function (dt) {

    },
});
