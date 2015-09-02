Fire.Class({
    extends: Fire.Behavior,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this.count = 0;
    },

    // called every frame
    tick: function (dt) {
        this.count += 0.005;

        this.tileScale.x = 2 + Math.sin(this.count);
        this.tileScale.y = 2 + Math.cos(this.count);

        this.tilePosition.x += 1;
        this.tilePosition.y += 1;
    },
});
