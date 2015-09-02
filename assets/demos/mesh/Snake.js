Fire.Class({
    extends: Fire.Behavior,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this.count = 0;

        // build a rope!
        this.ropeLength = 918 / 20;

        var points = [];

        for (var i = 0; i < 20; i++)
        {
            points.push(new PIXI.Point(i * this.ropeLength, 0));
        }

        this.points = points;
        this.vertices = new Float32Array(points.length * 4);
        this.uvs = new Float32Array(points.length * 4);
        this.colors = new Float32Array(points.length * 2);
        this.indices = new Uint16Array(points.length * 2);
        this.refresh();
    },

    // called every frame
    tick: function (dt) {
        this.count += 0.1;

        var points = this.points;

        // make the snake
        for (var i = 0; i < points.length; i++) {

            points[i].y = Math.sin((i * 0.5) + this.count) * 30;

            points[i].x = i * this.ropeLength + Math.cos((i * 0.3) + this.count) * 20;

        }
    },
});
